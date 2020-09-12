import Task from '../models/Task';
import { taskValidation } from '../validation/validation';

export const getTasks = async (req, res) => {

    try {
        const tasks = await Task.find();
        res.status(201).json(tasks);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const getTask = async (req, res) => {

    try {
        const tasks = await Task.findById(req.params.taskId);
        res.status(201).json(tasks);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const createTask = async (req, res) => {

    // Validate user input
    const { error } = taskValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const task = new Task({
        summary: req.body.summary,
        description: req.body.description,
        createdBy: req.body.createdBy
    });

    try {
        const createdTask = await task.save();
        res.status(201).send(createdTask);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const updateTask = async (req, res) => {

    try {
        const task = await Task.findById(req.params.taskId);
        const update = { 
            $set: {
                updates: task.updates.join(', ', req.body.update),
                date: Date.now()
            }
        };
        const updatedTask = await Task.updateOne({ _id: req.params.taskId }, update);
        res.status(201).json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const deleteTask = async (req, res) => {

    try {
        const task = await Task.remove({ _id: req.params.taskId });
        res.status(201).send(`${task} has been deleted.`);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const closeTask = async (req, res) => {

    try {
        const task = await Task.findById(req.params.taskId);
        const update = { 
            $set: {
                closed: true,
                closedBy: req.body.closedBy,
                date: Date.now()
            }
        };
        const closedTask = await Task.updateOne(task._id, update);
        res.status(201).json(closedTask);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};