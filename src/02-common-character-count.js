/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length > 0) {
    const newS2 = s2
      .split('')
      .filter((letter) => letter !== s1[0])
      .join('');
    const newS1 = s1
      .split('')
      .filter((letter) => letter !== s1[0])
      .join('');
    if (s1.length - newS1.length < s2.length - newS2.length) {
      return getCommonCharacterCount(newS1, newS2) + s1.length - newS1.length;
    }
    return getCommonCharacterCount(newS1, newS2) + s2.length - newS2.length;
  }
  return 0;
}

module.exports = getCommonCharacterCount;
