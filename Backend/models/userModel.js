import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
        min:[15, "your age should be more than 15"]
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})


const User = mongoose.model("User", userschema);
export default User;
