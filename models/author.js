const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    first_name: String,
    last_name: String
});


const Author = mongoose.model("author", authorSchema, "author");
module.exports = Author;