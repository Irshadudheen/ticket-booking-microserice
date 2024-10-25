import express,{json} from 'express'
const app = express()
import cors from 'cors'
const port = 3000
app.use(json())
app.use(cors())
app.get('/api/users/getuserinfo',(req,res)=>{res.send('hi you are their')})
app.listen(port,()=>console.log('the server is running on 3000!!!'))