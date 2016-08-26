var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var databaseSchema = new Schema({
    name: String,
    created_at: Date,
    updated_at: Date
});

var Database = mongoose.model('Database', databaseSchema);

module.exports = Database;