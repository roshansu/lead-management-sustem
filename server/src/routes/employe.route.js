import e from "express";
import { getEmployee, getEmployeeLeads } from "../controllers/employee.controller.js";
import verifyUser from "../middleware/verifyUser.js";

const employeeRoute = e.Router()

employeeRoute.get('/', verifyUser, getEmployee)
employeeRoute.get('/leads', verifyUser, getEmployeeLeads)


export default employeeRoute