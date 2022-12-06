const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    // If there is no header
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }

    const headerAuth = req.headers.authorization;
    const tokenAuth = headerAuth.split(' ')[1];

    // Verify token
    try{
        const decode = jwt.verify(tokenAuth, process.env.JWT_KEY);
        // Add the decoded token to the request object for use in routes
        req.user = decode;

        //Move onto the endpoint 
        next();

    } catch (error) {
        // Reject the request
        console.log(error);
        res.status(401).send("Invalid token")
    }
}