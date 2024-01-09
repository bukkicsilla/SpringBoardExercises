/** Node: node for a doubly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** DoublyLinkedList: chained together nodes. */

class DLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /**traverse(): print all the values in the linked list in order from head to tail. */

  traverse() {
    console.log("***************************************");
    let c = this.head;
    while (c) {
      console.log(c.val);
      c = c.next;
    }
    console.log("***********************************");
    return this;
  }

  /** _getNode(idx) get node at given index. */

  _getNode(idx) {
    let current = this.head;
    let count = 0;
    while (current !== null && count !== idx) {
      count++;
      current = current.next;
    }
    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return undefined;
    let current = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    }
    this.length--;
    return current;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = 0;
      this.tail = 0;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current = null;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      let counter = this.length - 1;
      while (counter > idx) {
        current = current.prev;
        counter--;
      }
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
    let current = this._getNode(idx);
    current.val = val;
    return current.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Invalid index");
    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unshift(val);
    let beforeNode = this._getNode(idx - 1);
    let afterNode = beforeNode.next;
    let newNode = new Node(val);
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    this.length++;
    return this;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    let removedNode = this._getNode(idx);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

const dll = new DLinkedList(["Fire", "Water", "Air"]);
dll.unshift("Earth");
//console.log(dll.getAt(3));
//dll.setAt(1, "Cosmos");
//dll.insertAt(3, "Cosmos");
//dll.removeAt(2);
dll.traverse();
//numbers = new DLinkedList([1, 2, 3, 4]);
//console.log(numbers.average());
