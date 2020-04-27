const { createUsers } = require("./user.controller");

const route = require("express").Router();


route.post("/create", createUsers);

module.exports = route;
