import express,{json} from 'express'
const app = express()
const port = 3000
app.use(json())
app.listen(port,()=>console.log('the server is running on 3000'))