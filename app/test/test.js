var Nightmare = require("nightmare");
var should = require("chai").should();

var nightmare = Nightmare({ show: true });
nightmare
  .goto("http://localhost:8080/")
  .type("#serach-input", "margarita")
  .click("#search-name-btn")
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  })

  