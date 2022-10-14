const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  rootElement = null;
  root() {
    return this.rootElement;
  }

  add(data) {
    const node = new Node(data);
    if (this.rootElement) {
      let current = this.rootElement;
      while (current !== null) {
        if (node.data < current?.data) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            return;
          }
        } else if (node.data > current?.data)
          if (current.right) current = current.right;
          else {
            current.right = node;
            return;
          }
      }
    } else {
      this.rootElement = node;
      return;
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    let current = this.rootElement;
    while (current !== null) {
      if (data === current.data) {
        return current;
      }
      if (current.data > data) {
        current = current.left;
      } else current = current.right;
    }
    return null;
  }

  replace(current, data) {
    if (current === null) return current;
    if (current.data > data) {
      current.left = this.replace(current.left, data);
      return current;
    } else if (current.data < data) {
      current.right = this.replace(current.right, data);
      return current;
    }
    if (current.left === null) {
      const buff = current.right;
      return buff;
    } else if (current.right === null) {
      const buff = current.left;
      return buff;
    } else {
      let node = current;
      let replace = current.right;
      while (replace.left !== null) {
        node = replace;
        replace = replace.left;
      }
      if (node !== current) node.left = replace.right;
      else node.right = replace.right;
      current.data = replace.data;
      return current;
    }
  }

  remove(data) {
    console.log('DATA', data);
    this.replace(this.rootElement, data);
    return;
  }

  searchPeak(cond) {
    const prop = !cond ? 'left' : 'right';
    if (!this.rootElement) return null;
    let current = this.rootElement;
    let result = this.rootElement;
    while (current[prop] !== null) {
      current = current[prop];
      result = current;
    }
    return result;
  }

  min() {
    return this.searchPeak(false).data;
  }

  max() {
    return this.searchPeak(true).data;
  }
}

const tree = new BinarySearchTree();

module.exports = {
  BinarySearchTree,
};
