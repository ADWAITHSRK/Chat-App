import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName :{ type:String ,required:true},
    email :{ type:String ,required:true,unique:true},
    password :{ type:String ,required:true},
    gender :{ type:String ,required:true,enum:['male','female','other']},
    profilePic :{ type:String ,default:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
},{timestamps:true})

 export const User = mongoose.model('User',userSchema)
