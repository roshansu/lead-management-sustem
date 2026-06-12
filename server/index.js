import e from 'express'
import dotenv from 'dotenv'
import db from './src/config/db.js'
import leadsRoute from './src/routes/leads.route.js'
import scheduleCron from './src/utils/cronJob.js'
import userAuthRoute from './src/routes/userAuth.route.js'
import employeeRoute from './src/routes/employe.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import analyticsRoute from './src/routes/analytics.route.js'

dotenv.config()

const app = e()

const PORT = process.env.PORT || 5000
app.use(e.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/leads', leadsRoute)
app.use('/api/user', userAuthRoute)
app.use('/api/employee', employeeRoute)
app.use('/api/analytics', analyticsRoute)

db()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is listening on PORT : ", PORT)
    })

    // scheduleCron()
})
.catch((err)=>{
    console.log("Error connecting: "+err)
})

