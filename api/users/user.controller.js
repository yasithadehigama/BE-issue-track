const { create } = require("./user.service");


module.exports = {
    createUsers: (req, res) => {
        create(req.body, (err, results) => {
            if (err) {
                if (err.code == 'ER_DUP_ENTRY' || err.errno == 1062) {
                    return res.status(500).json({
                        data: err.code
                    })
                }
                console.log(err);
            }
            console.log("REsult : ", results)
            return res.status(200).json({
                data: results
            });
        })
    }
}