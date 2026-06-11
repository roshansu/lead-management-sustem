import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
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
        required: true
    },
    phone: {
        type: String,
        required: true,
        maxLength: 20
    },
    source: {
        type: String,
        maxLength: 40,
    },
    service: {
        type: String,
        maxLength: 40,
    },
    platform: {
        type: String,
        maxLength: 40
    },
    campaign: {
        type: String,
        maxLength: 40
    },
    assignedTo: String,
    assignedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    keyword: {
        type: String,
        maxLength: 40
    },
    time:{
        type: String
    }
}, {timestamps: true})

const Leads = mongoose.model('Leads', leadSchema)

export default Leads