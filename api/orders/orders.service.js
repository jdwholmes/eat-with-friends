var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('orders');
 
var service = {};

service.create = create;
service.getById = getById;
service.getUserOrders = getUserOrders;
 
module.exports = service; 

function create(order) {
    var deferred = Q.defer();

    db.orders.insertOne(
            order,
            function (err, data) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve({
                    _id: data.insertedId
                });
            });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();
 
    db.orders.findById(_id, function (err, order) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (order) {
            deferred.resolve(order);
        } else {
            // order not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}

function getUserOrders(_id) {
    var deferred = Q.defer();

    db.orders.find({ "createdBy": _id }).toArray(function (err, orders) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (orders) {
            deferred.resolve(orders);
        } else {
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}