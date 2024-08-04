class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFound extends AppError {
  constructor(message = 'Not Found') {
    super(message, 404);
  }
}

module.exports = {
  AppError,
  NotFound,
};
