var config = require('config.json');
var express = require('express');
var router = express.Router();
var itemService = require('orders/items/items.service');
 
// routes
router.post('/create', create);
router.get('/:_id', getOrderItems);
 
module.exports = router;
 
function create(req, res) {
    itemService.create(req.body)
        .then(function (item) {
            res.send(item);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getOrderItems(req, res) {
    itemService.getOrderItems(req.params._id)
        .then(function (items) {
            if (items) {
                res.send(items);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}