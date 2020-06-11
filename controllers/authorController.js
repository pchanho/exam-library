/*Before MongoDB*/
// provide the controller a link to the author model
// var authors = require("../models/author");

const mongoose = require('mongoose');
const Author = mongoose.model('author');

// Function to handle a request to get all authors
// const getAllAuthors = function(req,res){
//     res.send(authors);
// };
//
// const getAuthorById = function(req, res){
//   const author = authors.find(author => author.id === req.params.id);
//
//     if(author){
//         res.send(author);
//     }
//     else{
//         res.send([]);
//     }
// };

/* After MongoDB */
const getAllAuthors = async function(req, res){
  try{
      const all_authors = await Author.find();
      return res.send(all_authors);
  }  catch(err){
      res.status(400);
      return res.send("Database query failed");
  }
};

const getAuthorById = async function(req, res){
    const id = req.body.id;
    Author.findById(id, function(doc){
        res.send(doc);
    })
};

const addAuthor = async function(req, res){
    const newAuthor = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    // authors.push(newAuthor);
    // res.send(authors);

    let data = new Author(newAuthor);
    await data.save();
    res.redirect('/');
};

// const updateAuthor = function(req, res){
//     const updateAuthor = req.body;
//     const author = authors.find(author => author.id === req.params.id);
//     if(!author){
//         return res.send([]);
//     }
//     Object.assign(author, updateAuthor);
//     res.send(author);
// };


// Remember to export the callbacks
module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    // updateAuthor
};