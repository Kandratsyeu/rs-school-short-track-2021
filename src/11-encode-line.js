/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  arr.push(' ');
  let num = 1;
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      num++;
    } else {
      newArr.push(num);
      newArr.push(arr[i - 1]);
      num = 1;
    }
  }
  return newArr.filter((el) => el !== 1).join('');
}
// console.log(encodeLine('aabbbc'));
module.exports = encodeLine;
