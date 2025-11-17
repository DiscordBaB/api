const Bans = require( "../models/BansModel" );
exports.getBansforUserByServer = async function (req, res) { // /:server_id/:user_id/
    let server_id, user_id;
    server_id = req.body.server_id
    user_id = req.body.user_id
    const { rows } = await Bans.findByPk(ban_id, (err, ban_result) =>{
        if (err) return res.status(500).send({code: 1, message: SQL_ERROR});
        res.status(200).json(rows)
    })
}