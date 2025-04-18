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
  constructor() {
    this.st = [];
  }

  push(element) {
    this.st.push(element);
  }

  pop() {
    if (this.st.length === 0) return undefined;
    return this.st.pop();
  }

  peek() {
    return this.st[this.st.length - 1];
  }
}
// const stack1 = new Stack();
// stack1.push(232);
// console.log(stack1.peek());
module.exports = Stack;
