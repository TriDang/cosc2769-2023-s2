// import data - the MODEL
const { users } = require("../data");

// authenticate a user
exports.authenticate = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  let user_id = -1;
  for (let user of users) {
    if (user.username == username && user.password == password) {
      user_id = user.id;
      break;
    }
  }

  if (user_id == -1) {
    res.json({msg: 'Login failed'});
    return;
  }
  res.cookie("user_id", user_id, { signed: true }).json({msg: 'Login successfully'});
};

// welcome
exports.home = async (req, res, next) => {
  const user_id = req.signedCookies.user_id;
  let username = '';
  for (let user of users) {
    if (user.id == user_id) {
      username = user.username;
      break;
    }
  }
  res.json({msg: `Welcome ${username}`});
};
