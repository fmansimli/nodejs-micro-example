import { CustomError, IError } from "./custom-error";

export class NotFoundError extends CustomError {
  public httpCode = 404;

  constructor(public message: string) {
    super();
  }

  public serialize(): IError {
    return {
      httpCode: this.httpCode,
      message: this.message,
    };
  }
}
