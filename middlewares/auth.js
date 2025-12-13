import ACL from '../models/ACLModel.js';
const AuthHeaderCheck = async function (req, res, next) {
    const token = req.headers['Authorization'];
    if (!token) return res.status(403).send({code: 1, message: 'INVALID_TOKEN'}); // No key given
    else if (token) {
      let find_token_result, needed_token;
      find_token_result = await ACL.findOne(
        {
          where: {
            api_key: token
          }
        }
      )
        .then(t => {
          needed_token = t
          if (token === needed_token) { next(); }

        })
        .catch(err => {
          if (err) {
            return res.status(403).send({code: 2, message: 'INVALID_TOKEN'}) // Key not found
          }
        })
    }
}

export default AuthHeaderCheck