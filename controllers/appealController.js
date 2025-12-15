
import Appeal from '../models/appealModel.js';
import dayjs from 'dayjs';
export function getAllAppeals (req, res) {
    const limit = req.body.limit || 25;
    const page = req.body.page || 0;

    Appeal.findAndCountAll({ limit, offset: page * limit })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send({ code: 1, message: 'SQL_ERROR' }));
}

export function getAppeal (req, res) {
    const appeal_id = req.appeal_id;

    Appeal.findByPk(appeal_id)
    .then(appeal => {
        if (!appeal) return res.status(404).send({ code: 2, message: 'NOT_FOUND' });
        res.status(200).json(appeal);
    })
    .catch(err => res.status(500).send({ code: 1, message: 'SQL_ERROR' }));
}

export function deleteAppeal (req, res) {
    const appeal_id = req.appeal_id;

    Appeal.destroy({ where: { id: appeal_id } })
    .then(deletedCount => res.status(200).json({ message: 'APPEAL_DELETED', deleted: deletedCount }))
    .catch(err => res.status(500).send({ code: 1, message: 'SQL_ERROR' }));
}
export function createAppeal (req, res) {
    const userID = req.body.userID;
    const serverID = req.body.serverID;
    const reason = req.body.reason;
    const disclaimer = req.body.disclaimer;
    const createdAt = dayjs().toISOString();

    Appeal.create({
        id: userID,
        serverID: serverID,
        reason: reason,
        disclaimer: disclaimer,
        userID: userID,
        createdAt: createdAt
    })
    .then(appeal => res.status(200).json(appeal))
    .catch(err => res.status(500).send({ code: 1, message: 'SQL_ERROR' }));
}