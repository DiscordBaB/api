
import Appeal from '../models/appealModel.js';
export async function getAllAppeals (req, res) {
    let limit = req.body.limit
    let page = req.body.page
    const {count, rows } = await Appeal.findAndCountAll({limit: limit, offset: page*limit}, (err, appeals) => {
        if (err) return res.status(500).send({code: 1, message: "SQL_ERROR"});
        res.status(200).json(rows);
    });
}

export async function getAppeal (req, res) {
    let appeal_id = req.appeal_id
    const { row } = await Appeal.findByPk(appeal_id, (err, appeal) =>{
        if (err) return res.status(500).send({code: 1, message: 'SQL_ERROR'});
        res.status(200).json(row)
    });
}

export async function deleteAppeal (req, res) {
    let appeal_id = req.appeal_id
    const { row } = await Appeal.destroy({where: {id: appeal_id}}, (err, appeal) => {
        if (err) return res.status(500).send({code: 1, message: 'SQL_ERROR'});
        res.status(200).json({message: 'APPEAL_DELETED'})
    });
}