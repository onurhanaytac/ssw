var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var autoIncrement = require('mongoose-auto-increment');

var databaseSchema = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date
});

var Database = mongoose.model('Database', databaseSchema);

module.exports = Database;
