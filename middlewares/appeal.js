
const AuthHeaderCheck = function (req, res, next) {
    const token = req.headers['Authorization'];
    if (!token) return res.status(403).send({code: 1, message: 'INVALID_TOKEN'});
    else if (token) {
        let needed_token = require('/home/ken/.dbab-config/dbab.json').auth_token
        if (token === needed_token) {
            next();

        }
        else return res.status(403).send({code: 2, message: 'INVALID_TOKEN'})
    }
}

module.exports = AuthHeaderCheck