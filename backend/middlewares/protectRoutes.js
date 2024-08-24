import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const protectRoutes = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - no token provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        }

        const user = await userModel.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "User Not Found" });
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in protectRoutes Middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export default protectRoutes;