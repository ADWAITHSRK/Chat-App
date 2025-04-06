import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  connectDb  from './config/Db.js';
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js'

dotenv.config();
const port = process.env.PORT ||  7000;
const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionsSuccessStatus: 200
  };
  


connectDb()
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());


app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
    console.log('Running....')
})

app.use('/api/user',userRoute)




app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
})
