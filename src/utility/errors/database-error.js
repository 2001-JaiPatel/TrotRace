const BaseError = require('./base-error');

class DataBaseError extends BaseError {
    name = 'DataBaseError';
    statusCode = 500;
    isOperational = false;
    constructor(description = 'Database failed') {
        super();
        this.description = description;
    }
}

module.exports = DataBaseError