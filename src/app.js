const express = require('express')


const app = express()
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))
const port = 3000
var students = [{
  name: "ranin",
  id: 119,
  gdpa: 4.5,
  date: new Date("28/7/2001"),
  registration: new Date()
}]


app.get('/api/students', (req, res) => {
  
  res.status(200).json(students)
})
const bodyparser = require("body-parser");
app.use(bodyparser.json())
app.post('/api/students', (req, res) => {
  console.log(req.body);
  students.push(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})