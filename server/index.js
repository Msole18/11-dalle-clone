import * as dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import { connectDB } from './mongodb/connect.js'

dotenv.config() //allow to put env variables in .env file

const app = express() //initialize express

app.use(cors()) //allow cross origin requests
app.use(express.json({ limit: '50mb' })) //

app.get('/', (req, res) => {
  res.send('Last day of the year')
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () =>
      console.log('Server has started in port http://localhost:8080')
    ) 
  } catch (error) {
    console.log(error)
  }
}

startServer() //start the server