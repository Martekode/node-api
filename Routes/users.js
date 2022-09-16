import express, { request } from 'express';
import { v4 as uuidv4 } from 'uuid';

// initialising router
const router = express.Router();

// Mock database 
let users = [
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
// this uses req.params to get the value
router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName} added to the database`);
});

// route for specific user by id 
router.get('/:id', (req, res)=>{
    const { id }= req.params;

    const foundUser = users.find((user)=> user.id == id);

    res.send(foundUser);
});

// delete route to delete from id
router.delete('/:id', (req, res) => {
    const { id }= req.params;

    users = users.filter((user)=> user.id != id);

    res.send(`User with the id ${id} was deleted from the database!`);
})


//patching route
router.patch('/:id', (req, res)=> {
    const { id } = req.params;
    const { firstName, lastName, age }= req.body;
    const user = users.find((user) => user.id == id);

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(user);
})
export default router;