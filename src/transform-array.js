const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next']) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const result = []
  const operations = []

  let i = 0

  while (i < arr.length) {
    if (arr[i] === "--discard-next") {
      if (!operations.includes(i + 1)) {
        i++
        operations.push(i)
      }
    } else if (arr[i] === "--discard-prev") {
      if (i - 1 > 0 && !operations.includes(i - 1)) {
        result.pop()
        operations.push(i - 1)
      }
    } else if (arr[i] === "--double-next") {
      if (i + 1 < arr.length && !operations.includes(i + 1)) {
        result.push(arr[i + 1])
      }
    } else if (arr[i] === "--double-prev") {
      if (i - 1 > 0 && !operations.includes(i - 1)) {
        result.push(arr[i - 1])
        operations.push(i - 1)
      }
    } else {
      result.push(arr[i])
    }

    i++
  }

  return result
}

module.exports = {
  transform,
}
