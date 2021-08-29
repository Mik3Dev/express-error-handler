import { ValidationError } from 'express-validator'
import { CustomError } from './custom-error'

export class RequestValidatorError extends CustomError {
  statusCode = 400

  constructor(public errors: ValidationError[]) {
    super('Invalid Request Parameters')
    Object.setPrototypeOf(this, RequestValidatorError.prototype)
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }))
  }
}
