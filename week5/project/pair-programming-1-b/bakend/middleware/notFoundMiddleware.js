const express = require('express');

const notFoundMiddleware = (req, res, next) => {
    const err = {
        code: 404,
        message: 'Not Found',
    };
    res.status(err.code).json(err.message);
};

module.exports = notFoundMiddleware;