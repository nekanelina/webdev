const express = require('express');

const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(err.code || 500).json({
        error: err.message,
    });
};

module.exports = errorMiddleware;