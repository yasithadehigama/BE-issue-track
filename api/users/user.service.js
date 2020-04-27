const db = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        
        const query = "INSERT INTO `usertable`("
            + "`nric`, `firstname`, `lastname`, `email`, `password`, `gender`, `address`) "
            + "VALUES('" + data.nric + "', '" + data.firstname + "', '" + data.lastname + "', '" +
            data.email + "', '" + data.password + "', '" + data.gender + "', '" + data.address + "') ";

        console.log("Query ===========");
        console.log(query);
        db.query(query, (err, result, fields) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            return callback(null, result);
        })
    }
}