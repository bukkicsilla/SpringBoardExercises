/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
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
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("Empty Linked List");
      //return undefined;
    }
    let current = this.head;
    let last = this.head;
    while (current.next) {
      last = current;
      current = current.next;
    }
    last.next = null;
    this.tail = last;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("Empty Linked List");
      //return undefined;
    }
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.tail = null;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
      //return null;
    }
    let current = this.head;
    /*for (let i=0; i< index; i++){
      current = current.next
    }*/
    //same loop with while
    let counter = 0;
    while (counter < idx) {
      current = current.next;
      counter++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
      //return null;
    }
    /*let current = this.head;
    let counter = 0;
    while (counter < idx) {
      current = current.next;
      counter++;
    }*/
    let current = this._getNode(idx);
    current.val = val;
    return current.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
      //return null;
    }
    if (idx === 0) {
      return this.unshift(val);
    }
    if (idx === this.length) {
      return this.push(val);
    }
    /*let current = this.head;
    let counter = 0;
    while (counter < idx - 1) {
      current = current.next;
      counter++;
    }*/
    let prev = this._getNode(idx - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return this;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
      //return undefined
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    let prev = this._getNode(idx - 1);
    let removedNode = prev.next;
    prev.next = removedNode.next;
    this.tail = prev;
    this.length--;
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

//const cats = new LinkedList();
//cats.push("Fluffy").push("Moomoo").push("Donut").unshift("Ginger").traverse();
//cats.push("Pipa");
//console.log(cats.removeAt(3), cats.length);
//cats.traverse();
//const numbers = new LinkedList([1,2,3,4,5]);
//console.log(numbers.average());
module.exports = LinkedList;
