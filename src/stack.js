const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  list = [];
  push(element) {
    this.list.push(element);
    console.log(this.list, this.list.at(-1));
  }

  pop() {
    // else return this.list.at(-1);
    console.log('AT -1', [...this.list].pop());
    return this.list.pop();
  }

  peek() {
    // console.log('peek', this.list[this.list.length - 1]);
    return this.list.at(-1);
  }

  enqueue(element) {
    this.elements = this.elements.hasOwnProperty('next')
      ? { value: element, next: this.elements }
      : { value: element, next: null };
    console.log(this.elements);
  }
  dequeue() {
    console.log(this.elements);
    this.goDeep(this.elements);
    console.log(this.deleted);
    return this.deleted;
  }

  getElements() {
    console.log('DELETED', this.deleted);
    return this.elements;
  }

  goDeep(obj) {
    if (obj.next) {
      if (obj.next.next !== null) {
        // console.log('deep', obj.next);
        this.goDeep(obj.next);
      } else {
        this.deleted = obj.next.value;
        obj.next = null;
      }
    }
  }
}

module.exports = {
  Stack,
};
