const express = require("express")
const project_app = express.Router()

project_app.get("/", (requests, response) => {
    response.send("Projects List")
})

project_app.get("/new", (requests, response) => {
    response.send("User New Form")
})

module.exports = project_app