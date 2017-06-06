var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('orderItems');
 
var service = {};

service.create = create;
service.getOrderItems = getOrderItems;
 
module.exports = service; 

function create(item) {
    var deferred = Q.defer();

    db.orderItems.insertOne(
            item,
            function (err, data) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });

    return deferred.promise;
}

function getOrderItems(_id) {
    var deferred = Q.defer();

    db.orderItems.find({ "orderId": _id }).toArray(function (err, items) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (items) {
            deferred.resolve(items);
        } else {
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}