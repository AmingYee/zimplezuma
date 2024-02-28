console.log("Model script loaded");

import {LinkedList} from "./LinkedList.js";

class ZumaModel {
    constructor() {
        this.board = new LinkedList();
        this.imagePaths = [
            'images/marble1.png',
            'images/marble2.png',
            'images/marble3.png',
            'images/marble4.png',
            'images/marble5.png',
            'images/marble6.png'
        ];
        this.currentCannonBall = null;
        this.initializeBoard();
    }

    initializeBoard() {
        for (let i = 0; i < 12; i++) {
            this.board.add(this.getRandomBall());
        }
        this.currentCannonBall = this.getRandomBall();
    }

    getRandomBall() {
        return this.imagePaths[Math.floor(Math.random() * this.imagePaths.length)];
    }

    shootCannonBall(position) {
        this.board.insertBefore(position, this.currentCannonBall);
        this.currentCannonBall = this.getRandomBall();
        this.findAndRemoveMatches(position);
    }

    findAndRemoveMatches(position) {
        const matches = this.findMatches(position);
        console.log("matches: "+matches)
        if (matches.length >= 3) {
            const nodesToRemove = [];
            matches.forEach(index => nodesToRemove.push(this.board.nodeAt(index)));
            nodesToRemove.forEach(node => this.board.removeNode(node));
        }
    }

    findMatches(position) {
        const matches = [];
        const currentData = this.board.get(position);

        let leftNode = this.board.nodeAt(position - 1);
        while (leftNode && leftNode.data === currentData) {
            matches.push(position - 1);
            leftNode = leftNode.prev;
            position--;
        }

        let rightNode = this.board.nodeAt(position + 1);
        while (rightNode && rightNode.data === currentData) {
            matches.push(position + 1);
            rightNode = rightNode.next;
            position++;
        }

        matches.push(position);

        return matches;
    }
}

export default ZumaModel;