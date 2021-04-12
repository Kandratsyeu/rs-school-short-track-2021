/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length < 1) {
    return [];
  }
  let switcher = false;
  const newNames = [names[0]];
  for (let i = 1; i < names.length; i++) {
    if (names.slice(0, i).includes(names[i])) {
      const number = names.slice(0, i).reduce((num, el) => {
        if (el === names[i]) return num + 1;
        return num;
      }, 0);
      newNames.push(`${names[i]}(${number})`);
      switcher = true;
    } else {
      newNames.push(names[i]);
    }
  }
  if (switcher) {
    return renameFiles(newNames);
  }
  return newNames;
}
// console.log(renameFiles(['file', 'file', 'image', 'file(1)', 'file']));
module.exports = renameFiles;
