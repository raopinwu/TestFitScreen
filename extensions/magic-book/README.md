# cocos-magic-book

cocos-magic-book 是一个基于cocos creator 3.0版本 的开源项目

这是一款致力于让cocos开发更简单的开发框架

[接入演示的demo cocos-magic-book-demo](https://gitee.com/magician-f/cocos-magic-book-demo)

# 使用说明

## 安装

该仓库的工程为 cocos creator 的拓展插件，请把工程安装到类似以下目录
```
../ccc3_project/extensions/magic-book
```

## 初始化

请初始化 magic book，以便能在后续使用它
```
mb.init()
```

# 详细介绍

magic book 缩写为 mb

## system 系统

### mb.audio 声音系统

针对引擎音频系统，使用比较繁琐的问题，对音频系统做了封装，有以下特点
* 采用全局声音设计，也支持对单个声音设置音量系数，以实现声音"近大远小"的效果
* 不需要感知 AudioSource组件，不需要要动态挂载挂资源，代码中进行资源加载
```
//加载资源
mb.audio.load_res(audio_clips);
```
* 针对同时播放的声音数量超过平台最大数，采用后播放的失败处理，更可控
* 封装一些比较常用的接口，使用起来更便捷
* 通过声音音量控制组件"mb_audio_volume_cp"，降低接入成本
* 音量大小的状态，内部实现了本地化储存，降低接入成本
* 音乐和音效播放的接口都支持传入播放完成回调
```
//播放音乐
mb.audio.play_music(audio_clip_name,is_loop,volume_scale,func_ended);
//播放音效
mb.audio.play_effect(audio_clip_name,is_loop,volume_scale,func_ended);
```
* 全局声音控制接口
```
mb.audio.pause_all();
mb.audio.resume_all_music();
mb.audio.resume_all_effect();

mb.audio.resume_all();
mb.audio.stop_all();
mb.audio.clear_all();
```
