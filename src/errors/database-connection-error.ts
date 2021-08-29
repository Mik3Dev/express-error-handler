import { CustomError } from './custom-error'
export class DatabaseConnectionError extends CustomError {
  statusCode = 500

  constructor() {
    super('Error Connecting DB')
    Object.setPrototypeOf(this, DatabaseConnectionError)
  }

  serializeErrors() {
    return [{ message: 'Error connecting to database.' }]
  }
}
