const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const tasksModel = mongoose.model('Tasks', tasksSchema);

module.exports = tasksModel;