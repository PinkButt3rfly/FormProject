//import packages
const express = require('express');
const {dbconnect} = require('./config/dbConfig')
const cors = require('cors')



// import routers
const user = require('./routers/studentRoutes')



//create express object
const app = express()
//middlewares
app.use(express.json())
app.use(cors())

app.use('/user', user)

// create port
const port = 4000;


//listen to server
app.listen(4000, function() {
    console.log(`server started on port ${port}`);
})

dbconnect().then(function() {
    console.log("database connection successful");
})