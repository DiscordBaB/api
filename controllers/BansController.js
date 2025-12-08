import Bans from "../models/BansModel.js";
export async function getBansforUserByServer(req, res) { // /:server_id/:user_id/
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
            if (err) return res.status(500).send({ code: 1, message: 'SQL_ERROR' })
        }
    )
}
export async function getAllBansByServer(req, res) {
    let server_id;
    server_id = req.server_id
    const { rows } = await Bans.findAll(
        {
            where: {
                serverID: server_id
            }
        }
    )
    .then(rows => {
        res.status(200).json(rows)
    })
    .catch(err => {
        if (err) return res.status(500).send({ code: 1, message: 'SQL_ERROR'})
    })
}
export async function getBanByIDWithServerID(req, res) {
    let server_id, user_id
    server_id = req.server_id
    user_id = req.user_id
    const { rows } = await Bans.findAll(
        {
            where: {
                serverID: server_id,
                userID: user_id
            }
        })
        .then(row => {
            res.status(200).json(row)
        })
        .catch(err => {
            if (err) return res.status(500).send({ code: 1, message: 'SQL_ERROR' });

        })
}
export async function addBantoServer(req, res) {
    let server_id, user_id, reason, expires_date
    server_id = req.server_id
    user_id = req.user_id
    reason = req.body.reason
    expires_date = req.body.expires
    const result = await Bans.create({ userID: user_id, serverID: server_id, reason: req.body.reason, expiresAt: expires_date })
    .then(row => {
        res.status(200).json(row)
    })
    .catch(err => {
        if (err) return res.status(500).send({ code: 1, message: 'SQL_ERROR' });
    })
}