const db = require('../../config/database');

module.exports = {
    create: (data, callback) => {

        const query = "INSERT INTO `issuestable`("
            + "`reporterid`, `issuetitle`, `issuedescription`, `assignnerid`, `reportdate`, `closeddate`, `status`) "
            + "VALUES('" + data.reporterid + "', '" + data.issuetitle + "', '" + data.issuedescription + "', '" +
            data.assignnerid + "', '" + data.reportdate + "', '" + data.closeddate + "', '" + data.status + "') ";

        db.query(query, (err, result, fields) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            return callback(null, result);
        })
    }
}