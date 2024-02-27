const express = require("express")
const { connection } = require("./db")
const { TokenModel } = require("./Models/token.models")
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors())
require('dotenv').config()
app.get("/tokens" , async(req, res)=>{
    try {
        const tokens = await TokenModel.find()
        res.status(200).send({"success":"true", tokens})
    } catch (error) {
        res.status(500).send({"success":"false", "Error": "Error in getting all tokens"})
    }
})

app.listen((process.env.PORT), async()=>{
    console.log(`Port is running on ${process.env.PORT}`)
try {
   await connection
   console.log("Connected To db")
} catch (error) {
    console.log("Error in Connection DB")
}
})