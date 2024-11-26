const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access forbidden: You do not have the right role" });
        }
        next();
    };
};

module.exports = authorizeRoles;
