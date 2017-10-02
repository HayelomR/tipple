var tipple = require("../models/tipple.js");
module.exports = function(app){
  app.get("/api/all", function(req, res) {
    tipple.findAll({}).then(function(results) {
      res.json(results);
    });
     });
// when a customer wants to search a specific type of cocktail
 //  app.get("/api/:cocktails", function(req, res) {
 //    if (req.params.name) {
 //      cocktails.findAll({
 //        where: {
 //          name: req.params.cocktails
 //        }
 //      }).then(function(results) {
 //        res.json(results);
 //      });
 //    }

  // });

  // when a customer wants to search a specific cocktail
    app.get("/api/:id", function(req, res) {
      if (req.params.id) {
        tipple.findAll({
          where: {
            id: req.params.id
          }
        }).then(function(results) {
          res.json(results);
        });
      }

    });  


// POST you favorite cocktail
app.post("/api/new", function(req, res) {
  tipple.create({
    name: req.body.name,
    ingredient1: req.body.ingredient1,
    ingredient2: req.body.ingredient2,
    ingredient3: req.body.ingredient3,
    ingredient4:req.body.ingredient4,
    ingredient5:req.body.ingredient5,
    ingredient6:req.body.ingredient6,
    Instruction:req.body.Instruction

  });
});

}

// this helps to remove the space when the customer put ingidrents (/\s/g, '')

