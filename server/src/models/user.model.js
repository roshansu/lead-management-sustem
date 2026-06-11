import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 40,
        required: true
    },
    email:{
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    phone: {
        type:String,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    assignedList:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Leads'
        }
    ],
    role:String
}, {timestamps: true})


const User = mongoose.model('User', userSchema)

export default User