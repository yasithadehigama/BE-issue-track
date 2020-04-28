const {
    create,
    getUserByNric
} = require("./user.service");

const jwt = require('jsonwebtoken');

module.exports = {
    createUsers: (req, res) => {
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

    getUserbyNric: (req, res) => {
        const nric = req.query.nric
        getUserByNric(nric, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            return res.status(200).json({
                data: result
            })
        })
    },

    loginUser: (req, res) => {
        const nric = req.body.nric;
        getUserByNric(nric, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            delete result[0].password;
            const token = jwt.sign({ result: result }, "123");
            return res.json({
                token: token
            })

        })
    },

    verifyToken: (req, res, next) => {
        const fulltoken = req.headers.authorization;
        const token = fulltoken.split(" ");
        jwt.verify(token[1], "123", function (err, decoded) {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
            next();
        });
    }
}