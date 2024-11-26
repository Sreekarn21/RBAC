const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];

        try {
            // Verify the token and attach the decoded payload to the request
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Add the decoded token to the request
            console.log("Decoded user:", req.user);
            next(); // Proceed to the next middleware
        } catch (err) {
            return res.status(400).json({ message: "Token is not valid" });
        }
    } else {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
};

module.exports = verifyToken;
