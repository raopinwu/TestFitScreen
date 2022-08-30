import mb_config from "./config/mb_config";
import mb_audio from "./system/audio/mb_audio";
/**
 * @name 这是一个实例，除了静态的和类，所有其它接口请从此单例开始
 * https://gitee.com/magician-f/cocos-magic-book
 */
export default new class {

    conf: mb_config = null;

    audio: mb_audio = null;

    /**
     * 初始化完成以后才能使用
     * @param conf 
     * @param func_cb 
     */
    init(conf?: mb_config, func_cb?: () => void) {
        this.conf = new mb_config();
        if (conf) {
            this.conf.is_debug = conf.is_debug;
        }
        this.audio = mb_audio.ins();
        //挂载到全局方便debug
        window["__mb"] = this;
        func_cb && func_cb();
    }

};