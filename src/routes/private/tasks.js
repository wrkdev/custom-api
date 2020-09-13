import express from 'express';
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../../controllers/tasks';
import { verify } from '../../validation/verifyToken';
const router = express.Router();

// GET LIST OF TASKS
router.get('/', verify, getTasks);

// GET SINGLE TASK
router.get('/:taskId', verify, getTask);

// CREATE TASK
router.post('/', verify, createTask);

// UPDATE TASK
router.post('/:taskId', verify, updateTask);

// DELETE TASK
router.delete('/:taskId', verify, deleteTask);

export default router;