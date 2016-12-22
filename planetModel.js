
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planetSchema = new Schema({
  name: String,
  system: [{type: Schema.Types.ObjectId, ref: 'Solar'}],
  visitor: [{type: Schema.Types.ObjectId, ref: 'Visitor'}],
});

var Planet = mongoose.model("Planet", planetSchema);
module.exports = Planet;
