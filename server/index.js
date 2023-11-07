import express from 'express';
import Connection from './Database/db.js'
import dotenv from 'dotenv';
import route from './Routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors'


const app=express();
app.use(cors())
dotenv.config()
app.use('/',route)

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended:true}))


Connection();

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port,${PORT}`)

})
