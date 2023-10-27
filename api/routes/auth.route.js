import express from "express"
import { authenticateUser } from "../controller/auth.controller.js"

const router = express.Router()

router.post("/authenticate", authenticateUser)
// router.post("/", createUser)

export default router