console.log("Controller script loaded");

import ZumaModel from './model.js';
import ZumaView from './view.js';

class ZumaController {
    constructor() {
        this.model = new ZumaModel();
        this.view = new ZumaView(this);
    }

    shootCannonBall(position) {
        this.model.shootCannonBall(position);
        this.view.renderBoard();
        this.view.renderCannon();
    }
}

export default ZumaController;

const controller = new ZumaController();