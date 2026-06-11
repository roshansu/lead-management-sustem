import User from "../models/user.model.js"

export const getEmployee = async(req, res)=>{
    try{
        const data = await User.find()

        res.status(200).json({
            success: true,
            message: "Data fetched",
            data
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getEmployeeLeads = async(req, res)=>{
    try{
        const {id} = req.query
        const data = await User.findById(id).populate('assignedList')

        res.status(200).json({
            success: true,
            message: "Data fetched",
            data
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}