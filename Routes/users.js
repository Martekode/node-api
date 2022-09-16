import express, { request } from 'express';

// initialising router
const router = express.Router();

// Mock database 
const users = [
    {
        firstName: "John",
        lasttName: "Doe",
        age: 25
    },
    {
        firstName: "Joane",
        lasttName: "Doe",
        age: 24
    }
]

// gives all the users at /users 
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

// post route
router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} added to the database`);

});

export default router;