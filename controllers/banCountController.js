import banCountModel from "../models/banCountModel.js";
const banCountController = {};
export async function getCountForUser (req, res) {
    let server_id, user_id;
    server_id = req.body.server_id
    user_id = req.body.user_id
    const { rows } = await banCountModel.findByPk(appeal_id, (err, acl_result) =>{
        if (err) return res.status(500).send({code: 1, message: SQL_ERROR});
        res.status(200).json(rows)
    })
}
banCountController.getCountForUser = getCountForUser;
export default banCountController;
