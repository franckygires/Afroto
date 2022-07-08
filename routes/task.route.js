const express = require('express');
const router = express.Router();

// controllers

const TaskCtrl = require('../Controllers/task.controller')


// middleware d'authentification 

const auth = require('../middleware/user.middleware')


// create task
router.post('/',auth, TaskCtrl.createTask);

// get one task by id
router.get('/:id', auth, TaskCtrl.getById);

// get task by author
router.get("/user/:id", auth, TaskCtrl.getByUserId);

// get task by date 
router.get("/date/:id", auth, TaskCtrl.getByDate);


// delete comment
router.delete('/:id',auth, TaskCtrl.deleteTask);

// update task
router.put('/:id', auth, TaskCtrl.updateTask);

// get all task
router.get('/',auth, TaskCtrl.getAllTask);

module.exports = router;
