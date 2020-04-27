const {
    createUsers,
    loginUser,
    getUserbyNric
} = require("./user.controller");

const route = require("express").Router();


route.post("/create", createUsers);
route.get("/getuser", getUserbyNric)
route.post("/login", loginUser);
module.exports = route;
