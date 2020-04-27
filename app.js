const express = require("express");
const app = express();

const userRoute = require("./api/users/user.router");

app.use(express.json());

app.use("/api/user", userRoute);

app.listen("5000", () => {
    console.log("Started in 5000");
})