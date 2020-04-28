const {
    createUsers,
    loginUser,
    getUserbyNric,
    verifyToken
} = require("./user.controller");

const route = require("express").Router();


route.post("/create", createUsers);
route.get("/getuser", verifyToken, getUserbyNric)
route.post("/login", loginUser);
module.exports = route;
