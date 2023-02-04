import HTTP_STATUS from 'http-status-codes'
export interface IErrorResponse {
    message: string
    statusCode: number
    status: string
    serializeErrors(): IError
}
export interface IError {
    message: string
    statusCode: number
    status: string
}
export abstract class CustomError extends Error {
    abstract statusCode: number
    abstract status: string
    constructor(message: string) {
        super(message);
    }
    seralizeErrors(): IError {
        return {
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
export class BadRequestError extends CustomError {
    status: string
    statusCode: number
    /**
     *
     */
    constructor(message: string) {
        super(message);
        this.statusCode = HTTP_STATUS.BAD_REQUEST
        this.status = 'error'
    }
}
export class JoiRequestValidationError extends CustomError {
    status: string
    statusCode: number
    /**
     *
     */
    constructor(message: string) {
        super(message);
        this.statusCode = HTTP_STATUS.BAD_REQUEST
        this.status = 'error'
    }
}
export class NotFoundError extends CustomError {
    status: string
    statusCode: number
    /**
     *
     */
    constructor(message: string) {
        super(message);
        this.statusCode = HTTP_STATUS.NOT_FOUND
        this.status = 'error'
    }
}
export class NotAuthorizedError extends CustomError {
    status: string
    statusCode: number
    /**
     *
     */
    constructor(message: string) {
        super(message);
        this.statusCode = HTTP_STATUS.UNAUTHORIZED
        this.status = 'error'
    }
}
export class FileTooLargeError extends CustomError {
    status: string
    statusCode: number
    /**
     *
     */
    constructor(message: string) {
        super(message);
        this.statusCode = HTTP_STATUS.REQUEST_TOO_LONG
        this.status = 'error'
    }
}
export class ServerError extends CustomError {
    status: string
    statusCode: number
    /**
     *
     */
    constructor(message: string) {
        super(message);
        this.statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE
        this.status = 'error'
    }
}