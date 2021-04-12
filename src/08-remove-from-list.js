/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  if (l.next) {
    if (l.value === k) {
      return removeKFromList(l.next, k);
    }
    return { value: l.value, next: removeKFromList(l.next, k) };
  }
  return { value: l.value, next: null };
}
// console.log(
//   removeKFromList(
//     {
//       value: 3,
//       next: {
//         value: 1,
//         next: {
//           value: 2,
//           next: {
//             value: 3,
//             next: null,
//           },
//         },
//       },
//     },
//     3
//   )
// );
module.exports = removeKFromList;
