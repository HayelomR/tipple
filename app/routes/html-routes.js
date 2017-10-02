// get me path that will connect all my files

var path = require("path");
// get me tipple.js file
var tipple = require("../models/tipple.js");
// let me export this
module.exports = function(app){
	// get all of the home page
		app.get("/", function(req, res) {
			res.sendFile(path.join(__dirname, "../public/home.html"));
		});
		// show the list of cocktail from the database
		app.get("/list", function(req, res) {
			res.sendFile(path.join(__dirname, "../public/list.html"));
		});
		// get the new acohol that will be created
		app.get("/new", function(req, res) {
			res.sendFile(path.join(__dirname, "../public/new.html"));
		});
		// get the file  that will  with what I eneter
		app.get("/search", function(req, res) {
			res.sendFile(path.join(__dirname, "../public/search.html"));

		});
	};
