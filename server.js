require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server Listening at port ${port}`)
})