import ACL from "../models/ACLModel.js";

export function getACLByServerID (req, res) {
    const server_id = req.server_id;

    ACL.findOne({ where: { server_id } })
    .then(acl => res.status(200).json(acl))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}

export function getAllACLs (req, res) {
    ACL.findAll()
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}

export function getACLByServerAndUserId (req, res) {
    const server_id = req.server_id;
    const user_id = req.user_id;

    ACL.findAll({ where: { server_id, user_id } })
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}

export function getACLByUserID (req, res) {
    const acl_user = req.user_id;

    ACL.findAll({ where: { user_id: acl_user } })
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).send({code: 1, message: 'SQL_ERROR'}));
}

export function verifyAPIKey (req, res) {
    // Middleware does this instead
    res.status(501).send({ code: 1, message: 'NOT_IMPLEMENTED' });
}