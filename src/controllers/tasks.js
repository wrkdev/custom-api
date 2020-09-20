import Task from '../models/Task';
import { taskValidation } from '../validation/validation';

export const getTasks = async (req, res) => {

    try {
        const tasks = await Task.find();
        res.status(201).json(tasks);
    } catch (err) {
        res.status(400).json({ code: 400, message: err});
    }
};

export const getTask = async (req, res) => {

    try {
        const tasks = await Task.findById(req.params.taskId);
        res.status(201).json(tasks);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

export const createTask = async (req, res) => {

    // Validate user input
    const { error } = taskValidation(req.body);
    if (error) return res.status(400).json({ code: 400, message: error.details[0].message });

    const task = new Task({
        summary: req.body.summary,
        description: req.body.description,
        createdBy: req.body.createdBy
    });

    try {
        const createdTask = await task.save();
        res.status(201).json(createdTask);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

export const updateTask = async (req, res) => {

    try {
        const task = await Task.findById(req.params.taskId);
        const update = { 
            $set: {
                summary: req.body.summary ? req.body.summary : task.summary,
                description: req.body.description ? req.body.description : task.description,
                createdBy: req.body.createdBy ? req.body.createdBy : task.createdBy,
                date: req.body.date ? req.body.date : task.date
            }
        };
        await Task.updateOne({ _id: req.params.taskId }, update);
        res.status(200).send(`Successfully update task with id: ${task._id}`);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

export const deleteTask = async (req, res) => {

    try {
        const task = await Task.remove({ _id: req.params.taskId });
        res.status(201).send(`${task} has been deleted.`);
    } catch (err) {
        res.status(400).json({ code: 400, message: err });
    }
};

/* REMOVED UNTIL FUNCTIONALITY BUILT TO USE IT */
// export const closeTask = async (req, res) => {

//     try {
//         const task = await Task.findById(req.params.taskId);
//         const update = { 
//             $set: {
//                 closed: true,
//                 closedBy: req.body.closedBy,
//                 date: Date.now()
//             }
//         };
//         const closedTask = await Task.updateOne(task._id, update);
//         res.status(201).json(closedTask);
//     } catch (err) {
//         res.status(400).json({ code: 400, message: err });
//     }
// };