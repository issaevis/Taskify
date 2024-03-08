import express from 'express'
import { CreateTask, UpdateTask, getTask, getTasks } from "../Controllers/Task.js";
import { verifyToken } from '../middleware/Verify.js';
const router = express.Router()

router.post('/create',verifyToken, CreateTask)
router.put('/:id', verifyToken, UpdateTask)
router.get('/:id', verifyToken, getTask)
router.get('/', verifyToken, getTasks)

export default router