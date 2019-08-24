const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Sending result for dishes !!!`);
    })
    .post((req, res) => {
        res.end(`Creating dish with name: ${req.body.name} !!!`);
    })
    .put((req, res) => {
        res.end(`Put operation not supported !!!`);
    })
    .delete((req, res) => {
        res.end(`Deleting dishes !!!`);
    });

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Sending result for dish: ${req.params.dishId} !!!`);
    })
    .post((req, res) => {
        res.end(`Post operation not supported !!!`);
    })
    .put((req, res) => {
        res.end(`Updating dish with id: ${req.params.dishId} !!!`);
    })
    .delete((req, res) => {
        res.end(`Deleting dish with id: ${req.params.dishId} !!!`);
    });

module.exports = dishRouter;