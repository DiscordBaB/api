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
    const is_bot = req.body.bot;
    const nickname = req.body.nickname;

    UserCache.create({ user_id, nickname, is_bot })
    .then(row => res.status(200).json(row))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}