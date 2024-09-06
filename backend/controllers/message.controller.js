//! Message Controller 
import conversationModel from '../models/conversationModel.js';
import messageModel from '../models/messageModel.js'
import { getReceiverSocketId, io } from '../socket/socket.js';

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await conversationModel.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("message")

        if (!conversation) return res.status(200).json([]);

        const message = conversation.message
        res.status(200).json(conversation);
    } catch (error) {
        console.log("Error in getMessages Controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const sendMessage = async (req, res) => {
    try {
        // Getting the user inputs
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // finding if converstion b/w sender and receiver exists
        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        // If conversation does not exists - Create New conversation
        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, receiverId],
            })
        }

        // Creating New Message
        const newMessage = new messageModel({
            senderId,
            receiverId,
            message
        })

        // Now when message is created put it in the message array
        if (newMessage) {
            conversation.message.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();
        Promise.all([conversation.save(), newMessage.save()]);

        //! Socket.io Functionality
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            // Sending the message to the specific receiver
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        // Finally send the message as response
        res.status(201).json(newMessage);

        // res.status(200).json({ message: "Message Sent" });
    } catch (error) {
        console.log("Error in send Message Controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}