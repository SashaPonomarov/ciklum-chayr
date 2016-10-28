const checkAuth = function(req, res, next) {
  if (req.method === "GET") {
    return next();
  }
  if (req.user) {
    if (req.user.status === "admin") {
      return next();
    }
    return res.status(403).json({status: "error", error: "User lacks privile to perform this operation"});
  }
  return res.status(401).json({status: "error", error: "User must be logged in to perform this operation"});
}

module.exports = checkAuth;