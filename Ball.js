console.log("Balls loaded");

class Ball {
    constructor(ballType) {
        this.ballType = ballType;
    }

    createElement() {
        const ball = document.createElement("div");
        ball.className = "ball";
        const img = document.createElement("img");
        img.src = `images/marble${this.ballType}.png`;
        img.dataset.ballType = this.ballType;
        ball.dataset.ballType = this.ballType;
        ball.appendChild(img);
        return ball;
    }
}

export default Ball;