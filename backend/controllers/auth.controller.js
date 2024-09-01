//! Auth Controllers 
import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js'

//? Signup 
export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
        // console.log("Request Body:", req.body);

        // Check for empty fields
        if (!fullname || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Verifying password
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }

        // Find user in DB and check if user already exists
        const user = await userModel.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User Already Exists" });
        }

        // Hash the password before storing it in the DB
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Profile pics
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // Create newUser and save to DB
        const newUser = new userModel({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
        })

        if (newUser) {
            // Generate JWT
            generateTokenAndSetCookie(newUser._id, res);

            // Saving user
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "Invalid Userdata" })
        }
    } catch (error) {
        console.log("Error in Signup controller", error);
        res.status(500).json({ error: "Internal server error" })
    }
}

//? Login 
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid! Username or Password" })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("Error in Login Controller", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//? Logout 
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Error in Logout Controller", error);
        res.status(500).json({ error: "Internal server error" })
    }
}