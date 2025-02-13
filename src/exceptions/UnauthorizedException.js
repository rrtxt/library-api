class UnauthorizedException extends Error {
  constructor(message) {
    super(message)
    this.message = message
    this.status = 403
  }
}

module.exports = UnauthorizedException
