import { _decorator, Component, Node, View, macro, Size, Vec3, view, ResolutionPolicy } from 'cc';
const { ccclass, property } = _decorator;

// property{
//     canvasRot:number,

// }

@ccclass('Main')
export class Main extends Component {
    
    start() {
        // View.instance.getResolutionPolicy();
        // View.instance.getDesignResolutionSize();
        // View.instance.setResolutionPolicy(macro.ORIENTATION_PORTRAIT);
        View.instance.setResizeCallback(()=>{
            this.init();
        });
        // view.setOrientation(macro.ORIENTATION_PORTRAIT);
        this.init();
    }

    private checkLand():boolean {
        let frameSize:Size = View.instance.getFrameSize();
        return frameSize.width>frameSize.height;
    }

    private init(){
        let canvas:Node = this.node;
        if(this.checkLand()){
            // canvas.setRotationFromEuler(new Vec3(0,0,-90));
            // canvas.angle = -90;
            // View.instance.setOrientation(macro.ORIENTATION_PORTRAIT);
            view.setOrientation(macro.ORIENTATION_PORTRAIT);
            // view.setDesignResolutionSize(750,1136,ResolutionPolicy.SHOW_ALL)
            view.setResolutionPolicy(ResolutionPolicy.SHOW_ALL);
        }else{
            View.instance.setOrientation(macro.ORIENTATION_PORTRAIT);
            // canvas.setRotationFromEuler(new Vec3(0,0,0));
            // canvas.angle = 0;
            View.instance == view?console.log("true"):console.log("false");
            // view.setDesignResolutionSize(750,1136,ResolutionPolicy.FIXED_WIDTH);
            view.setResolutionPolicy(ResolutionPolicy.SHOW_ALL);
        }
    }


    /*  */
    update(deltaTime: number) {
        
    }
}

