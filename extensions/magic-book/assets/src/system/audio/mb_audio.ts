import { AudioClip, AudioSource, Node, clamp01, game, sys, js } from "cc";
import mb_base from "../../common/base/mb_base";
import mb_decorator from "../../common/decorator/mb_decorator";
class MyAudioSource extends AudioSource {
    /**
     * 播放音量倍数，0.01-1,未设置默认为1
     */
    __volume_scale: number;
    /**
     * 播放完成回调
     */
    __func_ended: (source: AudioSource) => void;
    /**
     * 类型
     */
    __type: string;
}
type audio_data = {
    map_clips: Map<string, AudioClip>;
    list_music_sources: MyAudioSource[];
    list_effect_sources: MyAudioSource[];
    node_root: Node | null;
};
/**
 * @name 声音系统
 * https://gitee.com/magician-f/cocos-magic-book
 */
export default class mb_audio extends mb_base {

    public static const = {
        storage_music_volume: "magic-book-music_volume",
        storage_effect_volume: "magic-book-effect_volume",
        event_play_audio: "magic-book-play_audio",
        event_destroy_audio: "magic-book-destroy_audio",
        type_music: "music",
        type_effect: "effect",
    };

    protected name: string = "magic_audio";

    private _data: audio_data = {
        map_clips: new Map<string, AudioClip>(),
        list_music_sources: [],
        list_effect_sources: [],
        node_root: null
    };

    private _music_volume: number = 1;
    private _effect_volume: number = 1;

    private _get_AudioSource_comp(name: string): MyAudioSource {
        if (!this._data.node_root) {
            this._data.node_root = new Node();
            game.addPersistRootNode(this._data.node_root);
            this._data.node_root.on(AudioSource.EventType.ENDED, this._on_event_play_ended, this);
        }
        let source = this._data.node_root.addComponent(AudioSource) as MyAudioSource;
        source.clip = this._data.map_clips.get(name);
        return source;
    }

    private _get_audio_source(name: string): MyAudioSource {
        if (this.cur_audio_channel >= this.max_audio_channel) {
            this.log_warn(`[play] cur audio channel >= max audio channel ${this.max_audio_channel}`);
            return null;
        }
        if (!this._data.map_clips.has(name)) {
            this.log_warn(`[play] not found: [${name}] audio_clip`);
            return null;
        }
        let source = this._get_AudioSource_comp(name);
        source.name = name;
        return source;
    }

    private _destroy_source(source: AudioSource) {
        game.emit(mb_audio.const.event_destroy_audio, source);
        source.destroy();
    }

    /** 移除单个声音 */
    private _remove_source(list_source: AudioSource[], source: AudioSource) {
        let index = list_source.indexOf(source);
        if (list_source[index]) {
            list_source.splice(index, 1);
            this._destroy_source(source);
        }
    }

    /** 播放完成的回调 */
    private _on_event_play_ended(source: MyAudioSource) {
        this.log_debug(`play_ended:${source.name} ${source.uuid}`);
        if (source.__func_ended) {
            source.__func_ended(source);
        }
        if (source.loop) {
            //除了循环播放的音乐都移除
            return;
        }
        this._remove_source(this._data.list_music_sources, source);
        this._remove_source(this._data.list_effect_sources, source);
    }

    private _play(source: MyAudioSource, func_ended: (source: AudioSource) => {}) {
        source.__func_ended = func_ended;
        source.play();
        game.emit(mb_audio.const.event_play_audio, source, source.__type == mb_audio.const.type_music);
    }

    private _call_music(cb) {
        this._data.list_music_sources.forEach(cb);
    }

    private _call_effect(cb) {
        this._data.list_effect_sources.forEach(cb);
    }

    constructor() {
        super();
        let music_volume = sys.localStorage.getItem(mb_audio.const.storage_music_volume);
        if (js.isString(music_volume)) {
            this.music_volume = Number(music_volume) || 1;
        }
        let effect_volume = sys.localStorage.getItem(mb_audio.const.storage_effect_volume);
        if (js.isString(effect_volume)) {
            this.effect_volume = Number(effect_volume) || 1;
        }
    }

    //======== 公开的方法

    /**
     * 全局音乐音量
     */
    public get music_volume(): number {
        return this._music_volume;
    }
    public set music_volume(value: number) {
        if (value < 0) value = 0;
        if (value > 1) value = 1;
        this._music_volume = value;
        sys.localStorage.setItem(mb_audio.const.storage_music_volume, this._music_volume.toString());
        this._call_music((source: AudioSource) => {
            source.volume = this._music_volume;
        });
    }

    /**
    * 全局音乐音量
    */
    public get effect_volume(): number {
        return this._effect_volume;
    }
    public set effect_volume(value: number) {
        if (value < 0) value = 0;
        if (value > 1) value = 1;
        this._effect_volume = value;
        sys.localStorage.setItem(mb_audio.const.storage_effect_volume, this._effect_volume.toString());
        this._call_effect((source: AudioSource) => {
            source.volume = this._effect_volume;
        });
    }

    /**
     * 当前播放的声音数量
     */
    public get cur_audio_channel() {
        return this.cur_audio_music_channel + this.cur_audio_effect_channel;
    }

    /**
     * 当前播放音乐的数量
     */
    public get cur_audio_music_channel() {
        let count = 0;
        for (let i = 0; i < this._data.list_music_sources.length; i++) {
            count += this._data.list_music_sources[i].playing ? 1 : 0;
        }
        return count;
    }

    /**
     * 当前播放音效的数量
     */
    public get cur_audio_effect_channel() {
        let count = 0;
        for (let i = 0; i < this._data.list_effect_sources.length; i++) {
            count += this._data.list_effect_sources[i].playing ? 1 : 0;
        }
        return count;
    }

    /**
     * 当前平台最大播放声音数量
     */
    public get max_audio_channel() {
        return AudioSource.maxAudioChannel;
    }

    /**
     * 安装资源
     * @param audio_clips 
     */
    @mb_decorator.func_call_info_log()
    public load_res(audio_clips: AudioClip[]) {
        for (let i = 0; i < audio_clips.length; i++) {
            const clip = audio_clips[i];
            const name = audio_clips[i].name;
            this._data.map_clips.set(name, clip);
            clip.addRef();
        }
    }

    /**
     * 卸载资源
     * @param audio_clips 
     */
    @mb_decorator.func_call_info_log()
    public unload_res(audio_clips: AudioClip[]) {
        for (let i = 0; i < audio_clips.length; i++) {
            const clip = audio_clips[i];
            const name = audio_clips[i].name;
            if (this._data.map_clips.has(name)) {
                this._data.map_clips.delete(name);
                clip.decRef();
            }
        }
    }

    /**
    * 播放音乐
    * @param {string} audio_clip_name 声音资源名
    * @param {boolean} is_loop 是否循环播放
    * @param {number} volume_scale 单个声音音量大小系数,(0-1)，默认为1
    * @param {Function} func_ended 播放完成回调(请在回调中马上使用 source，如果不是循环播放的音效，它将马上被销毁)
    * @returns 
    */
    @mb_decorator.func_call_debug_log()
    public play_music(audio_clip_name: string, is_loop: boolean = true, volume_scale: number = 1, func_ended?: (source: AudioSource) => {}): string {
        const source = this._get_audio_source(audio_clip_name);
        if (!source) return null;
        this._data.list_music_sources.push(source);
        source.loop = is_loop;
        source.volume = clamp01(this.music_volume * volume_scale);
        source.__volume_scale = volume_scale;
        source.__type = mb_audio.const.type_music;
        this._play(source, func_ended);
        return source.uuid;
    }

    /**
    * 播放音效
    * @param {string} audio_clip_name 音效名称
    * @param {boolean} is_loop 是否循环播放
    * @param {number} volume_scale 单个声音音量大小系数,(0-1)，默认为1
    * @param {Function} func_ended 播放完成回调(请在回调中马上使用 source，如果不是循环播放的音效，它将马上被销毁)
    * @returns 
    */
    @mb_decorator.func_call_debug_log()
    public play_effect(audio_clip_name: string, is_loop: boolean = false, volume_scale: number = 1, func_ended?: (source: AudioSource) => {}): string {
        const source = this._get_audio_source(audio_clip_name);
        if (!source) return null;
        this._data.list_effect_sources.push(source);
        source.loop = is_loop;
        source.volume = clamp01(this.effect_volume * volume_scale);
        source.__volume_scale = volume_scale;
        source.__type = mb_audio.const.type_effect;
        this._play(source, func_ended);
        return source.uuid;
    }

    /**
     * 暂停 所有声音
     */
    @mb_decorator.func_call_info_log()
    public pause_all() {
        this.pause_all_music();
        this.pause_all_effect();
    }

    /**
     * 暂停 所有音乐
     */
    @mb_decorator.func_call_info_log()
    public pause_all_music() {
        this._call_music((source: AudioSource) => {
            source.pause();
        });
    }

    /**
     * 暂停 所有音效
     */
    @mb_decorator.func_call_info_log()
    public pause_all_effect() {
        this._call_effect((source: AudioSource) => {
            source.pause();
        });
    }

    /**
     * 恢复 所有声音
     */
    @mb_decorator.func_call_info_log()
    public resume_all() {
        this.resume_all_music();
        this.resume_all_effect();
    }

    /**
     * 恢复 所有音乐
     */
    @mb_decorator.func_call_info_log()
    public resume_all_music() {
        this._call_music((source: AudioSource) => {
            if (!source.playing) {
                source.play();
            }
        });
    }

    /**
     * 恢复 所有音效
     */
    @mb_decorator.func_call_info_log()
    public resume_all_effect() {
        this._call_effect((source: AudioSource) => {
            if (!source.playing) {
                source.play();
            }
        });
    }

    /**
     * 停止 所有声音
     */
    @mb_decorator.func_call_info_log()
    public stop_all() {
        this.stop_all_music();
        this.stop_all_effect();
    }

    /**
     * 停止 所有音乐
     */
    @mb_decorator.func_call_info_log()
    public stop_all_music() {
        this._call_music((source: AudioSource) => {
            source.stop();
        });
    }

    /**
     * 停止 所有音效
     */
    @mb_decorator.func_call_info_log()
    public stop_all_effect() {
        this._call_effect((source: AudioSource) => {
            source.stop();
        });
    }
    /**
     * 停止并移除 所有声音
     */
    @mb_decorator.func_call_info_log()
    public clear_all() {
        this.clear_all_music();
        this.clear_all_effect();
    }

    /**
    * 停止并移除 所有音乐
    */
    @mb_decorator.func_call_info_log()
    public clear_all_music() {
        this._call_music((source: AudioSource) => {
            this._destroy_source(source);
        });
        this._data.list_music_sources = [];
    }

    /**
    * 停止并移除 所有音效
    */
    @mb_decorator.func_call_info_log()
    public clear_all_effect() {
        this._call_effect((source: AudioSource) => {
            this._destroy_source(source);
        });
        this._data.list_effect_sources = [];
    }

    /**
    * 根据id获得声音实例
    */
    public get_AudioSource_by_uuid(uuid: string): AudioSource {
        for (let i = 0; i < this._data.list_music_sources.length; i++) {
            if (this._data.list_music_sources[i].uuid == uuid) {
                return this._data.list_music_sources[i];
            }
        }
        for (let i = 0; i < this._data.list_effect_sources.length; i++) {
            if (this._data.list_effect_sources[i].uuid == uuid) {
                return this._data.list_effect_sources[i];
            }
        }
        return null;
    }

}