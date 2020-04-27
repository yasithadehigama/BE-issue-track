const mysql = require("mysql");

// const pool = mysql.createpool({
//     port: "",
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "jwt-test"
// })
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jwt-test"
});

conn.connect(function (err) {
    if (err) throw err;
});


module.exports = conn;