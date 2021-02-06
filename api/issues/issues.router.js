const {
    createIssue,
} = require("./issues.controller");

const route = require("express").Router();


route.post("/create", createIssue);


module.exports = route;
