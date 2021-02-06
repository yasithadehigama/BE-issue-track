const {
    createIssue,
    getAllissues
} = require("./issues.controller");

const route = require("express").Router();

route.post("/create", createIssue);
route.get("/getAllIssues", getAllissues);

module.exports = route;
