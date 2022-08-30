import mb from "../../mb";

export default class mb_log {

    static info(...p) {
        console.info(...p);
    }

    static debug(...p) {
        if (!mb.conf.is_debug) {
            return;
        }
        console.info(...p);
    }

    static warn(...p) {
        console.warn(...p);
    }

    static error(...p) {
        console.error(...p);
    }

}