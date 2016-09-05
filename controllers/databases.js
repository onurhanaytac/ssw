var DatabaseModel = require('../models/database');

exports.create = function(databaseObj, callback) {
  var currentDate = new Date();
  databaseObj.updatedAt = currentDate;
  if (!databaseObj.createdAt) {
    databaseObj.createdAt = currentDate;
  }
  databaseObj.save(callback);
};

exports.get = function(query, callback) {
  DatabaseModel.find(query, callback);
};

exports.getAll = function(callback) {
  DatabaseModel.find({}, callback);
};

module.exports = exports;
