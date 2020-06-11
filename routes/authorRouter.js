// Express is a Node.js web application framework.
// Express is installed as a dependency of your app using NPM
// NPM is used to fetch packages for your application
// NPM = Node Package Manager
const express = require('express');

// Create router
const authorRouter = express.Router();

// load/import the author controller
const authorController = require('../controllers/authorController');

authorRouter.get('/', authorController.getAllAuthors);
authorRouter.get('/:id', authorController.getAuthorById);
authorRouter.post('/create', authorController.addAuthor);
// authorRouter.post('/update', authorController.updateAuthor);


module.exports = authorRouter;

