module.exports = class BusinessError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.status = statusCode;
    }
}