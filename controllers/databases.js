var DatabaseModel = require('../models/database');

exports.create = function (databaseObj, callback){
    var currentDate = new Date();
    databaseObj.updated_at = currentDate;
    if (!databaseObj.created_at){
        databaseObj.created_at = currentDate;
    }
    databaseObj.save(callback);
}

exports.get = function(query, callback){
    DatabaseModel.find(query, callback);
}

exports.getAll = function(callback){
    DatabaseModel.find({}, callback);
}

module.exports = exports;