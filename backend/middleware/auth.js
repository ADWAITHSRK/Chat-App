import jwt from 'jsonwebtoken';

export  function authMiddleware(req, res, next) {
    try {
        const token = req.cookies['auth_token'];
        
        if (!token) {
            return res.status(400).json({ message: "Not Authenticated" });
        }
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req._id = decoded._id;
        next();
    } catch (error) {
        res.status(401).json({ message: "UnAuthorized" });
        return;
    }
}