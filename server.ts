import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db"
import userRouter from "./routes/user"

const app = express()
dotenv.config()
app.use(cors())

connectDB()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/user", userRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
})