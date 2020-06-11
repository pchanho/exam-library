// provide the controller a link to the author model
var authors = require("../models/author");

// Function to handle a request to get all authors
const getAllAuthors = function(req,res){
    res.send(authors);
};

const getAuthorById = function(req, res){
  const author = authors.find(author => author.id === req.params.id);

    if(author){
        res.send(author);
    }
    else{
        res.send([]);
    }
};

const addAuthor = function(req, res){
    const newAuthor = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    authors.push(newAuthor);
    res.send(authors);
};

const updateAuthor = function(req, res){
    const updateAuthor = req.body;
    const author = authors.find(author => author.id === req.params.id);
    if(!author){
        return res.send([]);
    }
    Object.assign(author, updateAuthor);
    res.send(author);
};

// Remember to export the callbacks
module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor
};