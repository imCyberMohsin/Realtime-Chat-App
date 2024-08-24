import userModel from "../models/userModel.js";

const getUsersForSidebar = async (req, res) => {
    try {
        // get all users from the db except the loggedIn User
        // const getLoggedInUser = req.user._id;
        // const filteredUsers = userModel.find({ _id: { $ne: getLoggedInUser } }).select("-password");

        // get all user including yourself
        const allUsers = await userModel.find().select("-password");

        // return all the users
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar in user.controller", error.message);
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default getUsersForSidebar;