const User = require('../../../models/user')

exports.list = (req, res) => {
  // refuse if not an admin
  if (!req.decoded.admin) {
    return res.status(403).json({
      message: 'you are not an admin'
    })
  }

  User.find({})
  .then(
    users => {
      res.json({users})
    }
  )
}

exports.assignAdmin = (req, res) => {
  // refuse if not an admin
  if (!req.decoded.admin) {
    return res.status(403).json({
      message: 'you are not an admin'
    })
  }

  User.findOneByUsername(req.params.username)
  .then(
    user => user.assignAdmin
  ).then(
    res.json({
      success: true
    })
  )
}