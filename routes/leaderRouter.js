const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Sending result for leaders !!!`);
    })
    .post((req, res) => {
        res.end(`Creating leader with name: ${req.body.name} !!!`);
    })
    .put((req, res) => {
        res.end(`Put operation not supported !!!`);
    })
    .delete((req, res) => {
        res.end(`Deleting leaders !!!`);
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Sending result for leader: ${req.params.leaderId} !!!`);
    })
    .post((req, res) => {
        res.end(`Post operation not supported !!!`);
    })
    .put((req, res) => {
        res.end(`Updating leader with id: ${req.params.leaderId} !!!`);
    })
    .delete((req, res) => {
        res.end(`Deleting leader with id: ${req.params.leaderId} !!!`);
    });

module.exports = leaderRouter;