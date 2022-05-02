const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length
  },
  addLink(value) {
    this.chainArray.push(value)

    return this
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.chainArray.length
    ) {
      this.chainArray = []
      throw new Error("You can't remove incorrect link!")
    }

    this.chainArray.splice(position - 1, 1)

    return this
  },
  reverseChain() {
    this.chainArray.reverse()

    return this
  },
  finishChain() {
    const chainArray = [...this.chainArray]
    this.chainArray = []
    return chainArray.map((item) => `( ${item} )`).join("~~")
  },
}

module.exports = {
  chainMaker,
}
