import express,{json} from 'express'
import 'express-async-errors'

import { currentUserRouter,singinRouter,singoutRouter,singupRouter } from './routes/index'
import { errorhandler } from './middlewares/error-handler'
import cookieSession from 'cookie-session'
import mongoose from 'mongoose'
import cors from 'cors'
import { NotFoundError } from './errors/not-found-error'
const app = express()
const port = 3000
app.set('trust proxy',true)
app.use(json())

app.use(cookieSession({signed:false,secure:true}))
app.use(cors())
app.use(currentUserRouter)
app.use(singinRouter)
app.use(singoutRouter)
app.use(singupRouter)
app.all('*',async()=>{
    throw new NotFoundError();
})

app.use(errorhandler as express.ErrorRequestHandler)

const start = async()=>{
    if(!process.env.JWT_KEY){
        throw new Error('jwt key not found')
    }
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
        console.log('conneted to mongodb')
    } catch (error) {
        console.error(error)
    }
    app.listen(port,()=>console.log('the server is running on 3000!!!'))
}
start()