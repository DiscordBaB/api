import ACL from '../models/ACLModel.js';
const AuthHeaderCheck = async function (req, res, next) {
    const token = req.headers['Authorization'];
    if (!token) return res.status(403).send({code: 1, message: 'INVALID_TOKEN'});
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
        })
        .catch(err => {
          // Key not found
        });
        if (token === needed_token) { next(); }
        else return res.status(403).send({code: 2, message: 'INVALID_TOKEN'})
    }
}

export default AuthHeaderCheck