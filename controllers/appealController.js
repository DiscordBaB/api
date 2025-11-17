const Appeal = require('../models/appealModel');
exports.getAllAppeals = async function (req, res) {
    let limit = req.body.limit
    let offset = req.body.offset
    const {count, rows } = await Appeal.findAndCountAll({limit: limit, offset: offset}, (err, appeals) => {
        if (err) return res.status(500).send({code: 1, message: "SQL_ERROR"});
        res.status(200).json(rows);
    });
};
exports.getAppeal = async function (req, res) {
    let appeal_id = req.body.appeal_id
    const { row } = await Appeal.findByPk(appeal_id, (err, appeal) =>{
        if (err) return res.status(500).send({code: 1, message: SQL_ERROR});
        res.status(200).json(row)
    })

}