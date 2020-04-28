const mysql = require("mysql");

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