const { NotImplementedError } = require('../extensions/index.js');

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
  let digitArr = n.toString().split('');
  let maxNum = 0;
  for (let i = 0; i < digitArr.length; i++) {
    let tempDigitArr = digitArr.slice();
    tempDigitArr.splice(i, 1);
    curNum = Number(tempDigitArr.join(''));
    if (maxNum < curNum) maxNum = curNum;
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
