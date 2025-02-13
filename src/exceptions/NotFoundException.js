class NotFoundException extends Error {
  constructor(message) {
    super(message)
    this.message = message
    this.code = 404
  }
}
module.exports = NotFoundException
