const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const userRoutes = require('./routes/index') 

const port = 8080

app.use(cors())

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/route',userRoutes)

app.listen(port,()=>{
    console.log('Server up an running!')
})