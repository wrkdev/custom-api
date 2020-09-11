import { v4 as uuidv4 } from 'uuid';

// Export all functions in file
module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
};

let users = [];

const createUser = (req, res) => {
    const user = req.body;
  
    users.push({ ...user, id: uuidv4() });

    res.send(`${user.firstName} added to the database`);
};

const getUsers = (req, res) => {
    return res.send(users);
};

const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} has been removed from the database.`);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
  
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
  
    res.send(`User ${id} has been updated.`);
};