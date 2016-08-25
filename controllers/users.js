var UserModel = require('../models/user');

exports.create = function (userObj, callback){
    console.log('here');
    userObj.created_at = new Date();
    userObj.save(callback);
}

exports.get = function(query, callback){
    UserModel.find(query, callback);
}

exports.getAll = function(callback){
    UserModel.find({}, callback);
}

module.exports = exports;