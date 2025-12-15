import UserCache from "../models/userCacheModel.ts";

export function getAllUsers (req, res) {
    UserCache.findAll()
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}

export function getUser (req, res) {
    const server_id = req.server_id;
    const user_id = req.user_id;

    UserCache.findAll({
        where: { user_id }
    })
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}

export function addUsertoCache (req, res) {
    const user_id = req.user_id;
    const createdAt = req.body.createdAt;
    const is_bot = req.body.bot;
    const username = req.body.username;
    const is_system = req.body.system;
    const avatar_url = req.body.avatar_url;
    const banner_url = req.body.banner_url;
    const avatar_decoration_url = req.body.avatar_decoration_url;

    UserCache.create({
        id: user_id,
        username: username,
        bot: is_bot,
        system: is_system,
        avatar_url: avatar_url,
        banner_url: banner_url,
        avatar_decoration_url: avatar_decoration_url,
        createdAt: createdAt
        })
    .then(row => res.status(200).json(row))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}