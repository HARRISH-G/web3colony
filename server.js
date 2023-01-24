const express = require('express')
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const Email = require("./models/email")

const app = express()
const port = 3000
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://admin:B00B00Games@cluster0.zpp5hph.mongodb.net/web3colony?retryWrites=true&w=majority";

app.post('/', async(req, res) => {
  let email  = req.body.email
  let interest = req.body.interest
  const record = new Email({
    email : email,
    interest : interest
  })
  await record.save()
  res.send('Hello World!')
})

app.listen(port, () => {
    mongoose.connect(mongoDB).then(console.log("connected"))
  console.log(`Example app listening on port ${port}`)
})