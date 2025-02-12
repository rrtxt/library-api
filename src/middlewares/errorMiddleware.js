import { response } from "express"
import NotFoundException from "../exceptions/NotFoundException"
import UnauthorizedException from "../exceptions/UnauthorizedException"
import { ZodError } from "zod"

const errorMiddleware = (error, req, res, nextFunction) => {
  if (error instanceof NotFoundException) res.status(error.code).json({ message: error.message })
  else if (error instanceof UnauthorizedException) res.status(error.code).json({ message: error.message })
  else if (error instanceof ZodError) res.status(400).json({ message: error.errors })
  else res.status(500).json({ message: error.message })
}

export default errorMiddleware
