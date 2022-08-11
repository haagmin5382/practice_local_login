const jwt = require("jsonwebtoken");

module.exports = {
  post: async (req, res) => {
    console.log(req.body.userAccount);

    res.send("login");
  },
};
