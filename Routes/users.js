import express from 'express';
import { 
    createUser, 
    getUsers, 
    getUser , 
    updateUser, 
    deleteUser 
} from '../controllers/users.js';

// initialising router
const router = express.Router();

// gives all the users at /users 
router.get('/', getUsers);

// post route
// added uuid to handle a unique id
// this uses req.params to get the value
router.post('/', createUser);

// route for specific user by id 
router.get('/:id', getUser);

// delete route to delete from id
router.delete('/:id', deleteUser);


//patching route
router.patch('/:id', updateUser);

export default router;