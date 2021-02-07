const {
    createIssue,
    getAllissues,
    getIssuebyId
} = require("./issues.controller");

const route = require("express").Router();

route.post("/create", createIssue);
route.get("/getAllIssues", getAllissues);
route.get("/getIssue", getIssuebyId);

module.exports = route;
