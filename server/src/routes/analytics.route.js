import e from 'express'
import { getAnalytics } from '../controllers/analytics.controller.js'
import verifyUser from '../middleware/verifyUser.js'

const analyticsRoute = e.Router()

analyticsRoute.get('/', verifyUser, getAnalytics)

export default analyticsRoute