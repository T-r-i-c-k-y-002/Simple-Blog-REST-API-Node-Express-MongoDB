const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json()) // it parses the data that comes from the server and give those data in a correct format. it is mainly used for post operation.

// Import Routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute) // here it tells that when ever route goes to posts then use the middleware to travel that particular route.

dotenv.config()

//DB CONNECTION
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected Successsfully.');
})
.catch(err => {
    console.log(`Error: ${err}`);
})

//middleWare
app.use(express.json());

// basic setup cmd
app.get('/', (req, res) => {
    res.send('Node js setup is done')
})


app.listen(3000, () => {console.log('Server Is Up.....')})