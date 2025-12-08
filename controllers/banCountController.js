import banCountModel from "../models/banCountModel.js";
const banCountController = {};

export function getCountForUser (req, res) {
    const server_id = req.params.server_id;
    const user_id = req.params.user_id;

    banCountModel.findOne({ where: { server_id, user_id } })
    .then(result => {
        if (!result) return res.status(404).send({ code: 2, message: 'NOT_FOUND' });
        res.status(200).json(result);
    })
    .catch(err => res.status(500).send({ code: 1, message: 'SQL_ERROR' }));
}

export function getAllCounts (req, res) {
    banCountModel.findAll()
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).send({ code: 1, message: 'SQL_ERROR' }));
}

banCountController.getAllCounts = getAllCounts;
banCountController.getCountForUser = getCountForUser;
export default banCountController;
