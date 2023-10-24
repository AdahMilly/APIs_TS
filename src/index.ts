import express, {Request, Response} from "express"
const dotenv = require ("dotenv")


dotenv.config()
const app = express()

app.get('/hello', (req:Request, res:Response) => {
    res.send("Rusty rusty")
})

const PORT = process.env.PORT || 8080
app.listen(PORT,() => {console.log(`App running on Port ${PORT}`)})
