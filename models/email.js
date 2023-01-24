const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    email: 'string',
    interest : "string"
});

const Email = mongoose.model('Email', schema);

module.exports = Email