const express = require('express');
const project_app = express.Router();

// reads top to bottom
// project_app.use(express.static('views/projects.ejs'));

// console.log(project_json);
project_app.get('/', (requests, response) => {
	console.log('Projects!');
	response.render('projects.ejs'); // render file with second param passed down to said file
});

project_app.get('/:id', (request, response) => {
	request.params.idr;
	response.send(`Get project with ID ${id}`);
});

module.exports = project_app;
