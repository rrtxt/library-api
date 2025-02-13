const { ZodError } = require("zod")
const NotFoundException = require("../exceptions/NotFoundException")
const UnauthorizedExpection = require("../exceptions/UnauthorizedException")

const errorMiddleware = (error, req, res, nextFunction) => {
  console.error(error)
  if (error instanceof NotFoundException) res.status(error.code).json({ message: error.message })
  else if (error instanceof UnauthorizedExpection) res.status(error.code).json({ message: error.message })
  else if (error instanceof ZodError) res.status(400).json({ message: error.errors })
  else res.status(500).json({ message: error.message })
}

module.exports = errorMiddleware
