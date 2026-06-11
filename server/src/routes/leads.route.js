import e from "express";
import { getAllLeads, assignLead, getAssignedLeads } from "../controllers/lead.controller.js";
import verifyUser from "../middleware/verifyUser.js";

const leadsRoute = e.Router()

leadsRoute.get('/', verifyUser, getAllLeads)
leadsRoute.post('/', verifyUser, assignLead)
leadsRoute.get('/assigned', verifyUser, getAssignedLeads)

export default leadsRoute