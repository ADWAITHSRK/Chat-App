import Chat from "../models/chatModel";
import Message from "../models/messageModel";

export async function sendMessage(req, res) {
  try {
    const { message } = req.body;
    const recId = req.params.id;
    const sendId = req._id;
    if (!message || !recId) {
      return res.status(400).json({ message: "Some Thing is Missing" });
    }
    const newchat = await Chat.findOne({ members: { $all: [sendId, recId] } });
    if (!newchat) {
      newchat = await Chat.create({
        members: [sendId, recId],
      });
    }
    const newmessage = await Message.create({
      senderId: sendId,
      receiverId: recId,
      message: message,
    });
    if (newmessage) {
      newchat.messages.push(newmessage._id);
    }
    await newchat.save();
    await newmessage.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getMessage(req, res) {
    try {
      const { message } = req.body;
      const recId = req.params.id;
      const sendId = req._id;
      if (!message || !recId) {
        return res.status(400).json({ message: "Some Thing is Missing" });
      }
      const newchat = await Chat.findOne({ members: { $all: [sendId, recId] } }).populate("messages");
      if (!newchat){
        return res.status(200).json([])
      }
      return res.status(200).json(newchat.messages);
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  