/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map((el) => el.split('.'));
  const domainsObject = {};
  while (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      const property = `.${arr[i].reverse().join('.')}`;
      if (domainsObject[property]) {
        domainsObject[property]++;
      } else {
        domainsObject[property] = 1;
      }
    }
    arr.forEach((el) => el.reverse().shift());
    arr = arr.filter((el) => el.length > 0);
  }
  return domainsObject;
}
// getDNSStats(['epam.com', 'info.epam.com']);
module.exports = getDNSStats;
