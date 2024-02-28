console.log("View script loaded");

class ZumaView {
    constructor(controller) {
        this.controller = controller;
        this.gameContainer = document.getElementById('game-container');
        this.cannonContainer = document.getElementById('cannon-container');
        this.renderBoard();
        this.renderCannon();
        this.gameContainer.addEventListener('click', this.handleBoardClick.bind(this));
    }

    renderBoard() {
        this.gameContainer.innerHTML = '';
        for (let i = 0; i < this.controller.model.board.length; i++) {
            const imagePath = this.controller.model.board.get(i);
            const ball = document.createElement('img');
            ball.className = 'ball';
            ball.src = imagePath;
            ball.setAttribute('data-position', i);
            this.gameContainer.appendChild(ball);
        }
    }

    renderCannon() {
        this.cannonContainer.innerHTML = '';
        const cannonBall = document.createElement('img');
        cannonBall.className = 'cannon-ball';
        cannonBall.src = this.controller.model.currentCannonBall;
        this.cannonContainer.appendChild(cannonBall);
    }

    handleBoardClick(event) {
        const position = event.target.getAttribute('data-position');
        if (position !== null) {
            this.controller.shootCannonBall(parseInt(position));
        }
    }
}

export default ZumaView;