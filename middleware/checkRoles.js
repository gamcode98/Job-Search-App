const checkRoles = (...roles) => {
  return (req, res, next) => {
    const user = req.user
    if (roles.includes(user.role)) {
      return next()
    } else {
      return res.json({
        error: true,
        message: 'Insufficient permissions',
      })
    }
  }
}
module.exports = checkRoles
