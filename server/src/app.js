const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/examples');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

var Example = require("../models/example")

// Add new example
app.post('/examples', (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var description = req.body.description;
  var new_example = new Example({
    name: name,
    description: description
  })

  new_example.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Example saved successfully!'
    })
  })
})

// Fetch all examples
app.get('/examples', (req, res) => {
  Example.find({}, 'name description', function (error, examples) {
    if (error) { console.error(error); }
    res.send({
      examples: examples
    })
  }).sort({_id:-1})
})

// Fetch single example
app.get('/example/:id', (req, res) => {
  var db = req.db;
  Example.findById(req.params.id, 'name description', function (error, example) {
    if (error) { console.error(error); }
    res.send(example)
  })
})

// Update a example
app.put('/examples/:id', (req, res) => {
  var db = req.db;
  Example.findById(req.params.id, 'name description', function (error, example) {
    if (error) { console.error(error); }

    example.name = req.body.name
    example.description = req.body.description
    example.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a example
app.delete('/examples/:id', (req, res) => {
  var db = req.db;
  Example.remove({
    _id: req.params.id
  }, function(err, example){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})