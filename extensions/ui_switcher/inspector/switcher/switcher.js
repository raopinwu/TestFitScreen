'use strict';
let Vue = require('../../vue')
let packageName = "ui_switcher";
let packagePath = Editor.Package.getPath(packageName)
let fs = require('fs');

class CCTransform {
    constructor() { }
    nodeUuid = ""
    guid = ""
    stateUuid = ""
    active = false
    position = new Vec3(0, 0, 0)
    rotation = new Vec3(0, 0, 0)
    scale = new Vec3(0, 0, 0)
    anchor = new Vec2(0.5, 0.5)
    size = new Vec2(100, 100)
    color = new Vec3(255, 255, 255)
    opacity = 255
}

class Vec3 {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class SwitchState {
    constructor() { }
    uuid = ""
    name = ""
}

class TargetNode {
    constructor() { }
    guid = ""
    uuid = ""
}

module.exports = Editor.Panel.define({
    $: {
        root: "#root",
        button: 'ui-button[slot=content]',
    },
    template: `
<div id = 'root'>
<ui-prop>
    <ui-label value="Button" slot="label"></ui-label>
    <ui-button slot="content">Console</ui-button>
</ui-prop>
</div>
    `,
    update(dump) {
        window.plugin.target = dump.value
        window.plugin.init()
    },
    ready() {
        // this.$.button.addEventListener('confirm', () => {
        //     target = self.$this.dump.value
        //     console.log(target)
        //     console.log('1Custom Inspector: Label Button...');
        // });
        window.plugin = new Vue({
            el: this.$.root,
            data: {
                prePath: " __comps__.1",
                target: Object,
                states: [],
                targetNodes: [],
                curState: 0,
                transforms: [],
                isRouterAlive: true
            },
            template: fs.readFileSync(packagePath + '/inspector/switcher/switcher.html', 'utf8'),
            created() {
                // console.log("vue created")
            },
            methods: {
                init() {
                    // console.log("inited!")
                    this.prePath = this.target.node.path.replace("node", "")
                    this.states = []
                    for (let i = 0; i < this.target.switchStates.value.length; i++) {
                        let state = new SwitchState()
                        state.uuid = this.target.switchStates.value[i].value.uuid.value
                        state.name = this.target.switchStates.value[i].value.name.value
                        this.states.push(state)
                    }
                    this.targetNodes = []
                    for (let i = 0; i < this.target.targetNodes.value.length; i++) {
                        let node = new TargetNode()
                        node.uuid = this.target.targetNodes.value[i].value.node.value.uuid
                        node.guid = this.target.targetNodes.value[i].value.guid.value
                        this.targetNodes.push(node)
                    }
                    this.curState = this.target.curState.value
                    this.transforms = []
                },
                debugBtnClick() {
                    console.log(this.target.node.path)
                },
                reload() {//刷新html页面
                    this.isRouterAlive = false
                    this.$nextTick(() => (this.isRouterAlive = true))
                },
                // uuid:string  path:string dump{property}
                sendToPanel(data) {
                    Editor.Message.request('scene', 'set-property', data)
                },
                onStateNameChange(index, e) {//修改state名字
                    this.states[index].name = e.currentTarget.value
                    this.sendToPanel({
                        uuid: this.target.node.value.uuid,
                        path: this.prePath + "onSwitchStatesChange",
                        dump: {
                            type: 'UISwitcher',
                            value: {
                                states: this.states,
                            }
                        }
                    })
                },
                onCreateStateBtnClick() {//创建state
                    let state = new SwitchState()
                    state.uuid = this._guid()
                    state.name = ""
                    this.states.push(state)
                    this.sendToPanel({
                        uuid: this.target.node.value.uuid,
                        path: this.prePath + "onAddSwitchState",
                        dump: {
                            type: 'UISwitcher',
                            value: {
                                uuid: state.uuid,
                            }
                        }
                    })
                },
                onRemoveStateBtnClick(index) {//删除某个state
                    let state = this.states[index]
                    this.states.splice(index, 1);
                    this.sendToPanel({
                        uuid: this.target.node.value.uuid,
                        path: this.prePath + "onRemoveSwitchState",
                        dump: {
                            type: 'UISwitcher',
                            value: {
                                uuid: state.uuid,
                            }
                        }
                    })
                },
                onStateSaveBtnClick(index) {//保存某个state
                    this._saveAppointStateTransform(index)
                },
                onChooseState(index) {
                    this.curState = index
                    this.sendToPanel({
                        uuid: this.target.node.value.uuid,
                        path: this.prePath + "onCurStateChange",
                        dump: {
                            type: 'UISwitcher',
                            value: {
                                index: index,
                            }
                        }
                    })
                    this.reload()//刷新复选框的显示
                },
                onCreateTargetBtnClick() {
                    let node = new TargetNode()
                    node.uuid = ""
                    node.guid = this._guid()
                    this.targetNodes.push(node)
                    this.sendToPanel({
                        uuid: this.target.node.value.uuid,
                        path: this.prePath + "onAddTarget",
                        dump: {
                            type: 'UISwitcher',
                            value: {
                                uuid: node.uuid,
                                guid: node.guid
                            }
                        }
                    })
                },
                debug() {
                    console.log(this.targetNodes.length)
                },
                onChangeTargetBtnClick(event, index) {
                    let guid = this.targetNodes[index].guid
                    if (!event.currentTarget.value) {//删除
                        this.sendToPanel({
                            uuid: this.target.node.value.uuid,
                            path: this.prePath + "onRemoveTarget",
                            dump: {
                                type: 'UISwitcher',
                                value: {
                                    guid: guid
                                }
                            }
                        })
                        this.targetNodes.splice(index, 1);
                    } else {
                        let uuid = event.currentTarget.value
                        this.targetNodes[index].uuid = uuid
                        this.sendToPanel({
                            uuid: this.target.node.value.uuid,
                            path: this.prePath + "onChangeTarget",
                            dump: {
                                type: 'UISwitcher',
                                value: {
                                    guid: guid,
                                    uuid: uuid
                                }
                            }
                        })
                    }
                    this.reload()
                },
                onRemoveTargetBtnClick(index) {
                    let uuid = this.targetNodes[index].uuid
                    let guid = this.targetNodes[index].guid
                    this.sendToPanel({
                        uuid: this.target.node.value.uuid,
                        path: this.prePath + "onRemoveTarget",
                        dump: {
                            type: 'UISwitcher',
                            value: {
                                guid: guid
                            }
                        }
                    })
                    this.targetNodes.splice(index, 1);
                    this.reload()
                },
                async _saveAppointStateTransform(index) {
                    let state = this.states[index]
                    let ccTrans = []
                    let length = this.targetNodes.length
                    for (let i = 0; i < length; i++) {
                        let uuid = this.targetNodes[i].uuid
                        let guid = this.targetNodes[i].guid
                        let type = typeof (uuid)
                        if (type == "object" || type == "" || type == null || type == "undefind") {
                            continue
                        }
                        let dump = await Editor.Message.request('scene', 'query-node', uuid)
                        let obj = dump
                        let trans = new CCTransform()
                        trans.nodeUuid = uuid
                        trans.guid = guid
                        trans.stateUuid = state.uuid
                        trans.active = obj.active.value
                        trans.position = obj.position.value
                        trans.rotation = obj.rotation.value
                        trans.scale = obj.scale.value

                        let coms = obj.__comps__
                        for (let j = 0; j < coms.length; j++) {
                            let c = coms[j]
                            if (c.cid == "cc.UITransform") {
                                trans.size = new Vec2(c.value.contentSize.value.width, c.value.contentSize.value.height)
                                trans.anchor = c.value.anchorPoint.value
                            } else if (c.cid == "cc.Label") {
                                trans.color = new Vec3(c.value.color.value.r, c.value.color.value.g, c.value.color.value.b)
                                trans.opacity = c.value.color.value.a
                            } else if (c.cid == "cc.Sprite") {
                                trans.color = new Vec3(c.value.color.value.r, c.value.color.value.g, c.value.color.value.b)
                                trans.opacity = c.value.color.value.a
                            } else if (c.cid == "cc.UIOpacity") {
                                trans.opacity = c.value.opacity.value
                            }
                        }
                        ccTrans.push(trans)
                        if (ccTrans.length == length) {
                            let json = JSON.stringify(ccTrans)
                            await Editor.Message.request('scene', 'set-property', {
                                uuid: this.target.node.value.uuid,
                                path: this.prePath + "onTransChange",
                                dump: {
                                    type: 'UISwitcher',
                                    value: {
                                        trans: json
                                    }
                                }
                            })
                        }
                    }
                },
                _guid() {
                    var s = [];
                    var hexDigits = "0123456789abcdef";
                    for (var i = 0; i < 36; i++) {
                        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                    }
                    s[14] = "4";
                    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
                    s[8] = s[13] = s[18] = s[23] = "-";
                    var uuid = s.join("");
                    return uuid;
                }
            }
        });
    },
    close() {
        // console.log("close!")
    },
});