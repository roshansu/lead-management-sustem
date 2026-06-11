import e from 'express'
import { registerUser, loginUser } from '../controllers/userAuth.controller.js'

const userAuthRoute = e.Router()

userAuthRoute.post('/register', registerUser)
userAuthRoute.post('/login', loginUser)

export default userAuthRoute