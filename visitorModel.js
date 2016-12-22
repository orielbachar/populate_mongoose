

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visitorSchema = new Schema({
  name: String,
  homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
  visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
});

var Visitor = mongoose.model("Visitor", visitorSchema);
module.exports = Visitor;
