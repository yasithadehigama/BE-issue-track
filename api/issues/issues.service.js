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
    },

    getAllIssues: (data, callback) => {

        const query = "SELECT * FROM `issuestable`";

        db.query(query, (err, result, fields) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            return callback(null, result);
        })
    },

    getIssuebyId: (id, callback) => {
        const query = "SELECT * FROM `issuestable` WHERE `issueid`='" + id + "'";
        console.log("NRC L ", query);
        db.query(query, (err, result) => {
            if (err) {
                return callback(err);
            }
            return callback(null, JSON.parse(JSON.stringify(result)));
        })
    }
}