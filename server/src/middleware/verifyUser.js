import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'

const verifyUser = async(req, res, next)=>{
    try{
        // const {token} = req.cookies
        // console.log(token)

        const token = req.headers.authorization?.split(" ")[1];
        
        const payload = jwt.verify(token, process.env.SECRET_KEY)

        if(!payload){
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }

        const {id} = payload

        const user = await User.findOne({_id: id})

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid user"
            })
        }

        req.user = user

        next()
        
    }catch(err){
        res.status(200).json({
            success: false,
            message: err.message
        })
    }
}

export default verifyUser