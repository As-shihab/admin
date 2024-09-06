const express = require('express');
const cors = require('cors');
const user = require('./router/user');
require('dotenv').config()
const app = express()
app.use(express.json())

app.use(cors());

const port = process.env.PORT || 3000
// routers
app.use('/user' , user)
// end r4outer
app.listen(port , ()=>{
    console.log('server running at' +" "+ port)
})
