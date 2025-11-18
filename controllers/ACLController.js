const ACL = require( "../models/ACLModel" );
exports.getACLByServerID = async function (req, res) {
    let server_id = req.server_id
    const { rows } = await ACL.findByPk(appeal_id, (err, acl_result) =>{
        if (err) return res.status(500).send({code: 1, message: SQL_ERROR});
        res.status(200).json(rows)
    })
}
exports.getACLByUserID = async function (req, res) {
    let acl_user = req.user_id
    const { rows } = await ACL.findAll({})
}
exports.verifyAPIKey = async function (req, res) {

}