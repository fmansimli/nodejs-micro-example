export abstract class CustomError extends Error {
  abstract httpCode: number;
  abstract serialize(): IError;
}

export interface IError {
  httpCode: number;
  message?: string;
  errors?: Array<{ message: string; field?: string }>;
}
