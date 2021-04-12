/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const diff = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr
      .map((el, ind) => {
        if (ind !== i) return el;
        return '';
      })
      .join('');
    num = Number.parseInt(num, 10);
    diff.push(num);
  }
  return Math.max.apply(null, diff);
}
// console.log(deleteDigit(1001));
module.exports = deleteDigit;
