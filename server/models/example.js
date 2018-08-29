var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  name: String,
  description: String
});

var Example = mongoose.model("Example", ExampleSchema);
module.exports = Example;