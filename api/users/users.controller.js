var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('users/users.service');
 
// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/current', getCurrent);
router.put('/:_id', update);
 
module.exports = router;
 
function authenticate(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(401).send('Email or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getCurrent(req, res) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}