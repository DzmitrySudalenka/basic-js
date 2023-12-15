const { NotImplementedError } = require('../extensions/index.js');

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
  const resultObj = {};

  for (let subDomains of domains) {
    let subDomainsArr = subDomains.split('.').reverse();
    
    for (let i = 0; i < subDomainsArr.length; i++) {
      let tempArr = '.' + subDomainsArr.slice(0, i+1).join('.');
      resultObj[tempArr] = resultObj[tempArr] ? resultObj[tempArr] + 1 : 1;
    }
  }
  
  return resultObj;
}

module.exports = {
  getDNSStats
};
