const express = require('express');
const auth = require('../middleware/auth');
//TASK CONTROLLERS
const taskControllers = require('../controllers/task-controllers');

const router = new express.Router();

//CREATE TASK
router.post('/tasks', auth, taskControllers.createTask);
// GET/FILTER TASKS
router.get('/tasks', auth, taskControllers.getTasks);
//GET TASK BY ID
router.get('/tasks/:id', auth, taskControllers.getTaskById);
//UPDATE TASK
router.patch('/tasks/:id', auth, taskControllers.updateTask);
//DELETE TASK
router.delete('/tasks/:id', auth, taskControllers.deleteTask);

module.exports = router;
