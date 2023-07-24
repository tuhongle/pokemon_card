import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes/CardRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./uploads'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT)
    })
    .catch(err => {
        console.log(err)
    })


app.use('/', router)