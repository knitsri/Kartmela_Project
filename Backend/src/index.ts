import express from 'express'
import cors from 'cors'
import "dotenv/config"
import connectToDb from "./config/db.js"
import route from "./routes/user.routes.js"
import routes from './routes/products.routes.js'
import cartroute from './routes/cart.routes.js'
import wishlistroute from './routes/wishlist.routes.js' 
import orderRoutes from './routes/order.routes.js'
import categoryRoutes from './routes/category.routes.js'

const app = express()



const allowedOrigins = [
  "https://kartmela.vercel.app",
  "http://localhost:5173"         
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


 app.use(express.json())

 const port = process.env.PORT
 const url = process.env.MONGODB_URI

 if(!url) {
    console.error('Mongo Db URL is not defined in the .env file')
    process.exit(1)
 }

async function main(){
   try{
     await connectToDb(url as string)
     app.listen(port,() => {
      console.log(`Server started at port ${port}`)
     })
   }
   catch(e){
      console.error('Failed to connect with mongodb')
      process.exit(1)
   }
}

main()


app.use("/auth/api",route)
app.use("/api",routes)
app.use("/api/cart",cartroute)
app.use("/api/wishlist",wishlistroute)
app.use("/api",orderRoutes)
app.use("/api",categoryRoutes)

 

 
