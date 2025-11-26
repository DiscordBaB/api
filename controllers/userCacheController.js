const userCache = require( "../models/userCacheModel" );
exports.getUser = async function (req, res) {
    let server_id, user_id;
    server_id = req.server_id
    user_id = req.user_id
    const { rows } = await userCache.findAll({
                where: {
                    server_id: server_id,
                    user_id: user_id
                }
            }, (err, _) => {
        if (err) return res.status(500).send({code: 1, message: 'SQL_ERROR'});
        res.status(200).json(rows)
    })
}
exports.addUsertoCache = async function (req, res) {
    let user_id, creation_date, banner_url, avatarDecorationURL, avatarURL, username, bot, system, nicknames;
    user_id = req.body.user_id

    const result = await userCache.create({user_id: user_id}, (err, row) => {
        if (err) return res.status(500).send({code: 1, message: 'SQL_ERROR'});
        res.status(200).json(row)
    })

}