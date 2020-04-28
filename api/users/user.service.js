const db = require('../../config/database');

module.exports = {
    create: (data, callback) => {

        const query = "INSERT INTO `usertable`("
            + "`nric`, `firstname`, `lastname`, `email`, `password`, `gender`, `address`,`telno`) "
            + "VALUES('" + data.nric + "', '" + data.firstname + "', '" + data.lastname + "', '" +
            data.email + "', '" + data.password + "', '" + data.gender + "', '" + data.address + "','" + data.address + "') ";

        db.query(query, (err, result, fields) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            return callback(null, result);
        })
    },

    getUserByNric: (nric, callback) => {
        const query = "SELECT * FROM `usertable` WHERE `nric`='" + nric + "'";
        console.log("NRC L ", query);
        db.query(query, (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, JSON.parse(JSON.stringify(result)));
        })
    }
}