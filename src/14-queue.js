const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.q = {};
    this.len = 0;
  }

  get size() {
    return this.len;
  }

  enqueue(element) {
    if (this.len === 0) {
      this.q = new ListNode(element);
      this.len++;
    } else {
      let next = this.q;
      while (next.next !== null) {
        next = next.next;
      }
      next.next = new ListNode(element);
      this.len++;
    }
  }

  dequeue() {
    try {
      return this.q.value;
    } finally {
      this.q = this.q.next;
      this.len--;
    }
  }
}
// const qq = new Queue();
// qq.enqueue(3);
// qq.enqueue(2);
// qq.enqueue(1);
// qq.dequeue();
module.exports = Queue;
