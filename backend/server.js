import 'dotenv/config'
import express from "express"
import cors from "cors"
import productRouter from './routes/product.route.js'
import connectDB from './database/index.js'
import userRouter from './routes/user.route.js'

const app = express()
app.use(cors())

app.use(express.json());

const port = process.env.PORT || 3000

connectDB()

app.use('/api/users',userRouter)
app.use('/api/products',productRouter)

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`Pink Basket Backend running on port ${port}`)
})