
import { Component, AudioClip, _decorator, Slider, Label } from 'cc';
import { mb_base_cp } from '../../base/mb_base_cp';
import mb from '../../mb';
import mb_audio from './mb_audio';
const { ccclass, property, menu } = _decorator;

/**
 * @name 音量管理组件
 * @des 如果只绑定了音乐，则会一起控制音效
 * https://gitee.com/magician-f/cocos-magic-book
 */
@ccclass('mb_audio_volume_cp')
@menu("magic-book/mb_audio_volume_cp")
export class mb_audio_volume_cp extends mb_base_cp {

    @property(Slider)
    slider_music: Slider = null;

    @property(Slider)
    slider_effect: Slider = null;

    @property(Label)
    label_music: Label = null;

    @property(Label)
    label_effect: Label = null;

    onLoad() {
        if (this.slider_music) {
            this.slider_music.node.on("slide", this.on_slider_music, this);
            if (!this.slider_effect) {
                //如果没有配置音效，会同时能控制音效音量
                this.slider_music.node.on("slide", this.on_slider_effect, this);
            }
            this.slider_music.progress = mb.audio.music_volume;
        }
        if (this.slider_effect) {
            this.slider_effect.node.on("slide", this.on_slider_effect, this);
            this.slider_effect.progress = mb.audio.effect_volume;
        }
        this.update_music_label();
        this.update_effect_label();
    }

    on_slider_music(slider: Slider) {
        mb.audio.music_volume = Number(slider.progress.toFixed(2));
        this.update_music_label();
    }

    on_slider_effect(slider: Slider) {
        mb.audio.effect_volume = Number(slider.progress.toFixed(2));
        this.update_effect_label();
    }

    update_music_label() {
        if (this.label_music) {
            this.label_music.string = `${(mb.audio.music_volume * 100).toFixed(0)}%`;
        }
    }

    update_effect_label() {
        if (this.label_effect) {
            this.label_effect.string = `${(mb.audio.effect_volume * 100).toFixed(0)}%`;
        }
    }

}