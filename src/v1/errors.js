export class ExternalAPIError {
  constructor(status, message) {
    this.message = message
    this.status = status || 400
  }
}
