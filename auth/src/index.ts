import express,{json} from 'express'
import { currentUserRouter,singinRouter,singoutRouter,singupRouter } from './routes/index'
import { errorhandler } from './middlewares/error-handler'
import 'express-async-errors'
const app = express()
import cors from 'cors'
import { NotFoundError } from './errors/not-found-error'
const port = 3000
app.use(json())
app.use(cors())
app.use(currentUserRouter)
app.use(singinRouter)
app.use(singoutRouter)
app.use(singupRouter)
app.all('*',async()=>{
    throw new NotFoundError();
})
app.use(errorhandler as express.ErrorRequestHandler)
app.listen(port,()=>console.log('the server is running on 3000!!!'))