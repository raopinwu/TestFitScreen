import { _decorator, Component, Node, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mb_base_cp')
export class mb_base_cp extends Component {

    __preload() {
        let buttons = this.node.getComponentsInChildren(Button);
        for (let i = 0; i < buttons.length; i++) {
            const node = buttons[i].node;
            const func_name = "on_click_" + node.name;
            if (this[func_name]) {
                node.on("click", this[func_name], this);
            }
        }
    }
}

