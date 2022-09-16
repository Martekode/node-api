import express, { request } from 'express';
import { v4 as uuidv4 } from 'uuid';

// initialising router
const router = express.Router();

// Mock database 
const users = [
    {
        firstName: "John",
        lasttName: "Doe",
        age: 25,
        id : uuidv4()
    },
    {
        firstName: "Joane",
        lasttName: "Doe",
        age: 24,
        id : uuidv4()
    }
]

// gives all the users at /users 
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

// post route
// added uuid to handle a unique id
router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName} added to the database`);

});

export default router;