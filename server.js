var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/solar');

var Solar = require('./solarModel');
var Visitor = require('./visitorModel');
var Planet = require('./planetModel');





var solar1 = new Solar({starName: 'Sun', planets:[]});
var planet1 = new Planet({name:'Earth', system: solar1, visitor:[]});
var visitor1 = new Visitor ({name:'Human', homePlanet:planet1, visitedPlanets:[]})

solar1.planets.push(planet1);
visitor1.visitedPlanets.push(planet1)
planet1.visitor.push(visitor1);


solar1.save(function(err, result){
  // Find all the visitors in a system (subdocuments!)
  Solar.findOne({_id: result._id}).populate({
    path: 'planets',
    populate: path: ''
  })
});

visitor1.save(function(){
  // Find a visitor's list of visited planets 'name' returns only that property from visitedPlanets
  Visitor.findOne({name: 'Human'}).populate('visitedPlanets', 'name').exec(function(err, visitor){
    // console.log("found visitor", visitor);
  });
});

planet1.save(function(err,result){
  // Find all the visitors on a planet
  Planet.findOne({_id: result._id}).populate('visitor').exec(function(err, planet){
    console.log("found visitor", planet.visitor);
});
});



// Find the name of the star in the system of a visitor's home planet
// Find a planet's system's star name as well as its visitors

app.listen(8000);
