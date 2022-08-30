System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioSource, Node, clamp01, game, sys, js, mb_base, mb_decorator, MyAudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _crd, mb_audio;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfmb_base(extras) {
    _reporterNs.report("mb_base", "../../common/base/mb_base", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmb_decorator(extras) {
    _reporterNs.report("mb_decorator", "../../common/decorator/mb_decorator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
      clamp01 = _cc.clamp01;
      game = _cc.game;
      sys = _cc.sys;
      js = _cc.js;
    }, function (_unresolved_2) {
      mb_base = _unresolved_2.default;
    }, function (_unresolved_3) {
      mb_decorator = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d9dd0CfvdPS6W82nHJy540", "mb_audio", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'Node', 'clamp01', 'game', 'sys', 'js']);

      MyAudioSource = class MyAudioSource extends AudioSource {
        constructor(...args) {
          super(...args);
          this.__volume_scale = void 0;
          this.__func_ended = void 0;
          this.__type = void 0;
        }

      };

      /**
       * @name 声音系统
       * https://gitee.com/magician-f/cocos-magic-book
       */
      _export("default", mb_audio = (_dec = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec2 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec3 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_debug_log(), _dec4 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_debug_log(), _dec5 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec6 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec7 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec8 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec9 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec10 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec11 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec12 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec13 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec14 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec15 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), _dec16 = (_crd && mb_decorator === void 0 ? (_reportPossibleCrUseOfmb_decorator({
        error: Error()
      }), mb_decorator) : mb_decorator).func_call_info_log(), (_class = (_class2 = class mb_audio extends (_crd && mb_base === void 0 ? (_reportPossibleCrUseOfmb_base({
        error: Error()
      }), mb_base) : mb_base) {
        _get_AudioSource_comp(name) {
          if (!this._data.node_root) {
            this._data.node_root = new Node();
            game.addPersistRootNode(this._data.node_root);

            this._data.node_root.on(AudioSource.EventType.ENDED, this._on_event_play_ended, this);
          }

          let source = this._data.node_root.addComponent(AudioSource);

          source.clip = this._data.map_clips.get(name);
          return source;
        }

        _get_audio_source(name) {
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

        _destroy_source(source) {
          game.emit(mb_audio.const.event_destroy_audio, source);
          source.destroy();
        }
        /** 移除单个声音 */


        _remove_source(list_source, source) {
          let index = list_source.indexOf(source);

          if (list_source[index]) {
            list_source.splice(index, 1);

            this._destroy_source(source);
          }
        }
        /** 播放完成的回调 */


        _on_event_play_ended(source) {
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

        _play(source, func_ended) {
          source.__func_ended = func_ended;
          source.play();
          game.emit(mb_audio.const.event_play_audio, source, source.__type == mb_audio.const.type_music);
        }

        _call_music(cb) {
          this._data.list_music_sources.forEach(cb);
        }

        _call_effect(cb) {
          this._data.list_effect_sources.forEach(cb);
        }

        constructor() {
          super();
          this.name = "magic_audio";
          this._data = {
            map_clips: new Map(),
            list_music_sources: [],
            list_effect_sources: [],
            node_root: null
          };
          this._music_volume = 1;
          this._effect_volume = 1;
          let music_volume = sys.localStorage.getItem(mb_audio.const.storage_music_volume);

          if (js.isString(music_volume)) {
            this.music_volume = Number(music_volume) || 1;
          }

          let effect_volume = sys.localStorage.getItem(mb_audio.const.storage_effect_volume);

          if (js.isString(effect_volume)) {
            this.effect_volume = Number(effect_volume) || 1;
          }
        } //======== 公开的方法

        /**
         * 全局音乐音量
         */


        get music_volume() {
          return this._music_volume;
        }

        set music_volume(value) {
          if (value < 0) value = 0;
          if (value > 1) value = 1;
          this._music_volume = value;
          sys.localStorage.setItem(mb_audio.const.storage_music_volume, this._music_volume.toString());

          this._call_music(source => {
            source.volume = this._music_volume;
          });
        }
        /**
        * 全局音乐音量
        */


        get effect_volume() {
          return this._effect_volume;
        }

        set effect_volume(value) {
          if (value < 0) value = 0;
          if (value > 1) value = 1;
          this._effect_volume = value;
          sys.localStorage.setItem(mb_audio.const.storage_effect_volume, this._effect_volume.toString());

          this._call_effect(source => {
            source.volume = this._effect_volume;
          });
        }
        /**
         * 当前播放的声音数量
         */


        get cur_audio_channel() {
          return this.cur_audio_music_channel + this.cur_audio_effect_channel;
        }
        /**
         * 当前播放音乐的数量
         */


        get cur_audio_music_channel() {
          let count = 0;

          for (let i = 0; i < this._data.list_music_sources.length; i++) {
            count += this._data.list_music_sources[i].playing ? 1 : 0;
          }

          return count;
        }
        /**
         * 当前播放音效的数量
         */


        get cur_audio_effect_channel() {
          let count = 0;

          for (let i = 0; i < this._data.list_effect_sources.length; i++) {
            count += this._data.list_effect_sources[i].playing ? 1 : 0;
          }

          return count;
        }
        /**
         * 当前平台最大播放声音数量
         */


        get max_audio_channel() {
          return AudioSource.maxAudioChannel;
        }
        /**
         * 安装资源
         * @param audio_clips 
         */


        load_res(audio_clips) {
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


        unload_res(audio_clips) {
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


        play_music(audio_clip_name, is_loop = true, volume_scale = 1, func_ended) {
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


        play_effect(audio_clip_name, is_loop = false, volume_scale = 1, func_ended) {
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


        pause_all() {
          this.pause_all_music();
          this.pause_all_effect();
        }
        /**
         * 暂停 所有音乐
         */


        pause_all_music() {
          this._call_music(source => {
            source.pause();
          });
        }
        /**
         * 暂停 所有音效
         */


        pause_all_effect() {
          this._call_effect(source => {
            source.pause();
          });
        }
        /**
         * 恢复 所有声音
         */


        resume_all() {
          this.resume_all_music();
          this.resume_all_effect();
        }
        /**
         * 恢复 所有音乐
         */


        resume_all_music() {
          this._call_music(source => {
            if (!source.playing) {
              source.play();
            }
          });
        }
        /**
         * 恢复 所有音效
         */


        resume_all_effect() {
          this._call_effect(source => {
            if (!source.playing) {
              source.play();
            }
          });
        }
        /**
         * 停止 所有声音
         */


        stop_all() {
          this.stop_all_music();
          this.stop_all_effect();
        }
        /**
         * 停止 所有音乐
         */


        stop_all_music() {
          this._call_music(source => {
            source.stop();
          });
        }
        /**
         * 停止 所有音效
         */


        stop_all_effect() {
          this._call_effect(source => {
            source.stop();
          });
        }
        /**
         * 停止并移除 所有声音
         */


        clear_all() {
          this.clear_all_music();
          this.clear_all_effect();
        }
        /**
        * 停止并移除 所有音乐
        */


        clear_all_music() {
          this._call_music(source => {
            this._destroy_source(source);
          });

          this._data.list_music_sources = [];
        }
        /**
        * 停止并移除 所有音效
        */


        clear_all_effect() {
          this._call_effect(source => {
            this._destroy_source(source);
          });

          this._data.list_effect_sources = [];
        }
        /**
        * 根据id获得声音实例
        */


        get_AudioSource_by_uuid(uuid) {
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

      }, _class2.const = {
        storage_music_volume: "magic-book-music_volume",
        storage_effect_volume: "magic-book-effect_volume",
        event_play_audio: "magic-book-play_audio",
        event_destroy_audio: "magic-book-destroy_audio",
        type_music: "music",
        type_effect: "effect"
      }, _class2), (_applyDecoratedDescriptor(_class.prototype, "load_res", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "load_res"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unload_res", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "unload_res"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "play_music", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "play_music"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "play_effect", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "play_effect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pause_all", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "pause_all"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pause_all_music", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "pause_all_music"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pause_all_effect", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "pause_all_effect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resume_all", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "resume_all"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resume_all_music", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "resume_all_music"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resume_all_effect", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "resume_all_effect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stop_all", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "stop_all"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stop_all_music", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "stop_all_music"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stop_all_effect", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "stop_all_effect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clear_all", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "clear_all"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clear_all_music", [_dec15], Object.getOwnPropertyDescriptor(_class.prototype, "clear_all_music"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clear_all_effect", [_dec16], Object.getOwnPropertyDescriptor(_class.prototype, "clear_all_effect"), _class.prototype)), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8cdf14a5d2597b0c57122b05534284eb07b192e.js.map