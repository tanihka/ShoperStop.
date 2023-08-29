const cors = require('cors'); // Import the cors package
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('connection is established'))
.catch((err)=>console.error('mongodb connection error',err));

const app = express();

 
app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);
// app.get('/',(req, res)=>{
//     res.send('hiii')
// })
app.listen(5555, ()=>{
    console.log('server is running')
});