/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  function sum(n) {
    if (n % 10 === n) {
      return n;
    }
    return sum(Math.floor(n / 10)) + (n % 10);
  }
  const answer = sum(num);
  if (answer > 9) {
    return getSumOfDigits(answer);
  }
  return answer;
}
// console.log(getSumOfDigits(91));
module.exports = getSumOfDigits;
