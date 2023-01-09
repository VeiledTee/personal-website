const express = require("express")
const teaching_app = express.Router()

// reads top to bottom
// project_app.use(express.static('views/projects.ejs'));

// console.log(project_json);
teaching_app.get("/", (requests, response) => {
    response.render('teaching.ejs')  // render file with second param passed down to said file
})

module.exports = teaching_app
