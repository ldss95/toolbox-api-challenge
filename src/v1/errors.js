export class CustomError {
  constructor(status, message) {
    this.message = message
    this.status = status || 400
  }
}

export class ExternalAPIError extends CustomError {}
