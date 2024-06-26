/**ExpressErrir extends normal JS error so we 
 * can add a status when we make an instance of it.
 */

class ExpressError extends Error{
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

/** 404 Not Found Error */

class NotFoundError extends ExpressError{
    constructor(message = "Not Found") {
        super(message, 404);
    }
}

/** 401 Unathorized */

class UnauthorizedError extends ExpressError{
    constructor(message = "UnauthorizedError") {
        super(message, 401)
    }
}

/**400 Bad Request */

class BadRequestError extends ExpressError{
    constructor(message = "Bad Request"){
        super(message, 400)
    }
}

/**403 Forbidden Error */

class ForbiddenError extends ExpressError{
    constructor(message = "Access Not Allowed"){
        super(message, 403)
    }
}

module.exports = {
    ExpressError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
    ForbiddenError,
}