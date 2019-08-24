const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Sending result for promotions !!!`);
    })
    .post((req, res) => {
        res.end(`Creating promotion with name: ${req.body.name} !!!`);
    })
    .put((req, res) => {
        res.end(`Put operation not supported !!!`);
    })
    .delete((req, res) => {
        res.end(`Deleting promotions !!!`);
    });

promoRouter.route('/:promotionId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Sending result for promotion: ${req.params.promotionId} !!!`);
    })
    .post((req, res) => {
        res.end(`Post operation not supported !!!`);
    })
    .put((req, res) => {
        res.end(`Updating promotion with id: ${req.params.promotionId} !!!`);
    })
    .delete((req, res) => {
        res.end(`Deleting promotion with id: ${req.params.promotionId} !!!`);
    });

module.exports = promoRouter;