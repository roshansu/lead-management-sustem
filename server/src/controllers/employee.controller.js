import User from "../models/user.model.js"

export const getEmployee = async(req, res)=>{
    try{
        const {search} = req.query
        let filter = {}
            if (search) {
      filter.$or = [
        {
          fullName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }
        const data = await User.find(filter)

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