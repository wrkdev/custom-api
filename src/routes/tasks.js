const express = require('express');
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/tasks.js');
const router = express.Router();

// GET LIST OF TASKS
router.get('/', getTasks);

// GET SINGLE TASK
router.get('/:taskId', getTask);

// CREATE TASK
router.post('/', createTask);

// UPDATE TASK
router.patch('/:taskId', updateTask);

// DELETE TASK
router.delete('/:taskId', deleteTask);

module.exports = router;