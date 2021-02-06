const express = require("express");
const app = express();

const userRoute = require("./api/users/user.router");
const issueRoute = require("./api/issues/issues.router");



app.use(express.json());


app.use("/api/user", userRoute);
app.use("/api/issues", issueRoute);

app.listen("5000", () => {
    console.log("Started in 5000");
})