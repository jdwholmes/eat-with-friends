var config = require('config.json');
var express = require('express');
var router = express.Router();
var orderService = require('orders/orders.service');
 
// routes
router.post('/create', create);
router.get('/detail/:_id', getOrder);
router.get('/my-orders', getUserOrders);
 
module.exports = router;
 
function create(req, res) {
    orderService.create(req.body)
        .then(function (order) {
            res.send(order);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getOrder(req, res) {
    orderService.getById(req.params._id)
        .then(function (order) {
            if (order) {
                res.send(order);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getUserOrders(req, res) {
    orderService.getUserOrders(req.user.sub)
        .then(function (orders) {
            if (orders) {
                res.send(orders);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}