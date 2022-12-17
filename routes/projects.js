const express = require("express")
const project_app = express.Router()

// reads top to bottom
// project_app.use(express.static('views/projects.ejs'));

// project_json = jQuery.getJSON("https://api.github.com/users/VeiledTee/repos")
// console.log(project_json);
project_app.get("/", (requests, response) => {
    console.log('Projects!');
    // console.log(project_json);
    // response.send('A LIST OF PROJECTS')  // render file with second param passed down to said file
    response.render('projects')  // render file with second param passed down to said file
})

project_app.get('/:id', (request, response) => {
    request.params.idr
    response.send(`Get project with ID ${id}`)

})

// project_app.param("id", (request, response, next, id) => {
//     request.project = project_array[id]
//     next()
// })

// project_app.get("/new", (requests, response) => {
//     response.send("User New Form")
// })

module.exports = project_app
