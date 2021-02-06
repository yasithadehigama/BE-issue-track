const {
    create,
} = require("./issues.service");

const jwt = require('jsonwebtoken');

module.exports = {
    createIssue: (req, res) => {
        create(req.body, (err, results) => {
            if (err) {
                if (err.code == 'ER_DUP_ENTRY' || err.errno == 1062) {
                    return res.status(500).json({
                        data: err.code
                    })
                }
            }
            return res.status(200).json({
                data: results
            });
        })
    },
}