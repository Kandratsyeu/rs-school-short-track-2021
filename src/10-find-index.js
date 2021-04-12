/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let index = Math.floor(maxIndex / 2);
  if (value > array[maxIndex] || value < array[minIndex]) {
    return -1;
  }
  while (array[index] !== value) {
    if (value < array[index]) {
      maxIndex = index;
      index = Math.floor((maxIndex - minIndex) / 2);
    }
    if (value > array[index]) {
      minIndex = index;
      index += Math.ceil((maxIndex - minIndex) / 2);
    }
  }
  return index;
}
// console.log(findIndex([1, 2, 3, 4, 5], 5));
module.exports = findIndex;
