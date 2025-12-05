import ACL from "../models/ACLModel.js";
export async function getACLByServerID (req, res) {
    let server_id = req.server_id
    const { rows } = await ACL.findByPk(appeal_id, (err, acl_result) =>{
        if (err) return res.status(500).send({code: 1, message: SQL_ERROR});
        res.status(200).json(rows)
    })
}
export async function getAllACLs (req, res) {
    const { rows } = await ACL.findAll({})
    res.status(200).json(rows)
}
export async function getACLByServerAndUserId (req, res) {
    let server_id = req.server_id
    let user_id = req.user_id
    const { rows } = await ACL.findAll({})
}
export async function getACLByUserID (req, res) {
    let acl_user = req.user_id
    const { rows } = await ACL.findAll({})
}
export async function verifyAPIKey (req, res) {

}