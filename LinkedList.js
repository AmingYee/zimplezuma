class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    dumpList() {
        let a_node = this.head;
        while (a_node != null) {
            console.log(`
node: ${a_node.data}
-----------
  prev: ${a_node.prev ? a_node.prev.data : null}
  next: ${a_node.next ? a_node.next.data : null}
`); //crash if no null check
            a_node = a_node.next;
        }
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    addLast(data) {
        this.add(data);
    }

    addFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    insertAfter(index, data) {
        if (index < 0 || index >= this.length) return false;

        const newNode = new Node(data);
        if (index === this.length - 1) {
            this.add(data);
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            newNode.prev = current;
            newNode.next = current.next;
            current.next.prev = newNode;
            current.next = newNode;
            this.length++;
        }
        return true;
    }

    insertBefore(index, data) {
        if (index < 0 || index >= this.length) return false;

        const newNode = new Node(data);
        if (index === 0) {
            this.addFirst(data);
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            newNode.prev = current.prev;
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
            this.length++;
        }
        return true;
    }

    first() {
        if (!this.head) return null;
        return this.head.data;
    }

    last() {
        if (!this.tail) return null;
        return this.tail.data;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        if (current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (current === this.head) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.length--;
        return current.data;
    }

    removeFirst() {
        if (!this.head) return null;

        const removedData = this.head.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removedData;
    }

    removeLast() {
        if (!this.tail) return null;

        const removedData = this.tail.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removedData;
    }

    insertAfterNode(data, existingNode) {
        if (!existingNode) return false;

        const newNode = new Node(data);
        if (existingNode === this.tail) {
            this.add(data);
        } else {
            newNode.prev = existingNode;
            newNode.next = existingNode.next;
            existingNode.next.prev = newNode;
            existingNode.next = newNode;
            this.length++;
        }
        return true;
    }

    insertBeforeNode(data, existingNode) {
        if (!existingNode) return false;

        const newNode = new Node(data);
        if (existingNode === this.head) {
            this.addFirst(data);
        } else {
            newNode.prev = existingNode.prev;
            newNode.next = existingNode;
            existingNode.prev.next = newNode;
            existingNode.prev = newNode;
            this.length++;
        }
        return true;
    }

    removeNode(node) {
        if (!node) return null;

        if (node === this.head) {
            return this.removeFirst();
        } else if (node === this.tail) {
            return this.removeLast();
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.length--;
            return node.data;
        }
    }

    nodeAt(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    swapNodes(nodeA, nodeB) {
        if (!nodeA || !nodeB) return false;

        const temp = nodeA.data;
        nodeA.data = nodeB.data;
        nodeB.data = temp;
        return true;
    }
}