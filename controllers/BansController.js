const Bans = require( "../models/BansModel" ).default;
exports.getBansforUserByServer = async function (req, res) { // /:server_id/:user_id/
    let server_id, user_id;
    server_id = req.server_id
    user_id = req.user_id
    const { rows } = await Bans.findAll(
        {
            where: {
                serverID: server_id,
                userID: user_id
            }
        }, (err, ban_result) => {
            if (err) return res.status(500).send({code: 1, message: 'SQL_ERROR'})
        }
    )
}
exports.getAllBansByServer = async function (req, res) {
    let server_id;
    server_id = req.server_id
    const { rows } = await Bans.findAll(
        {
            where: {
                serverID: server_id
            }
        }, (err, ban_result) => {
            if (err) return res.status(500).send({code: 1, message: 'SQL_ERROR'});
            res.status(200).json(rows)
        }
    )
}
exports.getBanByIDWithServerID = async function (req, res) {
    let server_id, user_id
    server_id = req.server_id
    user_id = req.user_id
    const { rows } = await Bans.findAll(
        {
            where: {
                serverID: server_id,
                userID: user_id
            }
        }, (err, ban_result) => {
            if (err) return res.status(500).send({code: 1, message: 'SQL_ERROR'});
            res.status(200).json(rows)
        }
    )
}
exports.addBantoServer = async function (req, res) {
    let server_id, user_id, reason, expires_date
    server_id = req.server_id
    user_id = req.user_id
    reason = req.body.reason
    expires_date = req.body.expires
    const result = await Bans.create({userID: user_id, serverID: server_id, reason: req.body.reason, expiresAt: expires_date})
}