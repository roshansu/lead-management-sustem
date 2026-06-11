import User from '../models/user.model.js'
import validate from '../utils/validate.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import onboardEmployee from '../utils/onboardEmployeEmail.js'

export const registerUser = async(req, res)=>{
    try{
        const {email, password} = req.body
        validate(req.body)

        const isExist = await User.findOne({email: email})

        if(isExist){
            return res.status(401).json({
                success: false,
                message: "User already exist"
            })
        }

        req.body.password = await bcrypt.hash(password, 10)
        // console.log(req.password)

        const data = await User.create(req.body)

        onboardEmployee(req.body.fullName, email, password)

        res.status(200).json({
            success: true,
            message: "User registered",
            data
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const loginUser = async(req, res)=>{
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const allow =  await bcrypt.compare(password, user.password)
        if(!allow){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({email, fullName: user.fullName, id: user._id}, process.env.SECRET_KEY, {expiresIn: "7d"})

        res.cookie("token", token)

        res.status(200).json({
            success: true,
            message: "Login success",
            user:{
                email,
                fullName: user.fullName,
                id: user._id
            },
            token
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}