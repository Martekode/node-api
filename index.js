import express, { request } from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './Routes/users.js';

//setyup our app to xpress
const app = express();
//declaring port for our app
const PORT = 5000;

// format we'll use is json
app.use(bodyParser.json());


//setup starting path for all users routes
app.use('/users', usersRoutes);

// root path
app.get('/', (req, res) => {	
    res.send('Hello World!');
})

// runnning and serving the server on a specific port
app.listen(PORT , () => console.log(`server listening one port: https://localhost:${PORT}`));




