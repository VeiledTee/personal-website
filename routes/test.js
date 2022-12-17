const express = require("express")
const test_app = express.Router()

// reads top to bottom
// project_app.use(express.static('views/projects.ejs'));

test_app.get("/", (requests, response) => {
    console.log('Testing!');
    response.render('test')
})

module.exports = test_app
