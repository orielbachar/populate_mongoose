var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solarSchema = new Schema({
  planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
  starName: String
});

var Solar = mongoose.model("Solar", solarSchema);
module.exports = Solar;
