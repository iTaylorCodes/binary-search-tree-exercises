class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) this.root = newNode;

    let current = this.root;
    while (current !== newNode) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
        }
        current = current.left;
      }
      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
        }
        current = current.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode;
      }
      return this.insertRecursively(val, current.left);
    }
    if (val > current.val) {
      if (current.right === null) {
        current.right = newNode;
      }
      return this.insertRecursively(val, current.right);
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (current.val !== val) {
      if (val < current.val) {
        if (!current.left) return undefined;
        current = current.left;
      }
      if (val > current.val) {
        if (!current.right) return undefined;
        current = current.right;
      }
    }

    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;

    if (val < current.val) {
      if (!current.left) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (!current.right) return undefined;
      return this.findRecursively(val, current.right);
    } else {
      return current;
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(visited = [], current = this.root) {
    visited.push(current.val);

    if (current.left) this.dfsPreOrder(visited, current.left);

    if (current.right) this.dfsPreOrder(visited, current.right);

    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(visited = [], current = this.root) {
    if (current.left) this.dfsInOrder(visited, current.left);

    visited.push(current.val);

    if (current.right) this.dfsInOrder(visited, current.right);

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(visited = [], current = this.root) {
    if (current.left) this.dfsPostOrder(visited, current.left);

    if (current.right) this.dfsPostOrder(visited, current.right);

    visited.push(current.val);

    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];

    const toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
      visited.push(current.val);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
