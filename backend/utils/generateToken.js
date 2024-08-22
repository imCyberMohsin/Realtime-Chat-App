//! Generate JSON Web Token 
import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    //? Create Token 
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d' });

    //? Pass the token to cookie 
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,   // In ms
        httpOnly: true,         // Prevent XSS
        sameSite: "strict",     // Prevent XSS, CSRF, Request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;