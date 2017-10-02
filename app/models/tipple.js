
// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");
// Create a cocktails table on tipple database
var tipple = sequelize.define("cocktail", {
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  name: {
    type:Sequelize.STRING
  },
  ingredient1: {
   type:Sequelize.STRING
 },
 ingredient2: {
  type:Sequelize.STRING
},

ingredient3: {
  type:Sequelize.STRING
},

ingredient4: {
  type:Sequelize.STRING
},
ingredient5: {
  type:Sequelize.STRING
},
ingredient6: {
  type:Sequelize.STRING
},
Instruction: {
  type:Sequelize.STRING
}

},
{
  timestamps: false
});
// // Sync
// tipple.sync({
//   force: true
// }).then(function() {
//   tipple.create({
//     name: "THE SALTY BIRD",
//     ingredient1: "0.75 oz. Campari",
//     ingredient2: "1.5 oz. aged rum",
//     ingredient3: "1.5 oz. fresh pineapple juice",
//     ingredient4: "0.5 oz. fresh lime juice",
//     ingredient5: "0.5 oz. simple syrup",
//     ingredient6:"pinch of salt",
//     Instruction: "Combine all ingredients, then shake and strain into a rocks glass over fresh ice. Garnish with a pinch of salt and dehydrated pineapple."
//   });
//   tipple.create({
//     name: "MINT JULEP",
//     ingredient1: "Mint",
//     ingredient2: "1 tbsp sugar",
//     ingredient3: "3 oz. bourbon",
//     ingredient4: "Crushed ice",
//     ingredient5: "",
//     ingredient6:"",
//     Instruction: "Place 5 to 6 mint leaves in the bottom of a pre-chilled highball glass or pewter cup. Add sugar and muddle slightly. Pack the glass with crushed or finely cracked ice. Add the bourbon and stir briskly until the glass frosts. Add more ice and stir again before serving. Garnish with a mint leaf. "
//   });
//   tipple.create({
//     name: "FINGER-STIRRED NEGRONI",
//     ingredient1: "1 oz. Campari",
//     ingredient2: "1 oz. Cinzano Rosso Vermouth",
//     ingredient3: "3 oz. bourbon",
//     ingredient4: "1 oz. Tanqueray Gin",
//     ingredient5: "",
//     ingredient6:"",
//     Instruction: "Pour ingredients over ice into a cocktail shaker. Stir (with your finger) and strain into a rocks glass with ice. Garnish with an orange twist. "
//   });
//   tipple.create({
//     name: "THE PARROT'S GROG",
//     ingredient1: "1 oz. Campari",
//     ingredient2: "0.5 oz. Smith & Cross",
//     ingredient3: "1 oz. fresh grapefruit juice",
//     ingredient4: "1 oz. Tanqueray Gin",
//     ingredient5: "0.5 oz. fresh lime juice ",
//     ingredient6:"club soda",
//     Instruction:"Combine all ingredients, then shake and strain into a rocks glass over fresh ice. Top with club soda, and serve with an umbrella/paper straw. "
//   });
//   tipple.create({
//     name: "PABO AMARGO",
//     ingredient1: "0.75 oz. Campari",
//     ingredient2: "1 oz. Wild Turkey 101 Bourbon",
//     ingredient3: "0.75 oz. Diplomatico",
//     ingredient4: "1 oz. Tanqueray Gin",
//     ingredient5: "0.75 oz. Lustau East India Solera ",
//     ingredient6:"cherry",
//     Instruction:"Combine all ingredients, then stir and strain into a cocktail glass. Garnish with a lemon twist. "
//   });
//   tipple.create({
//     name: "SOUR-CHERRY GIN SMASH",
//     ingredient1: "6 sour cherries",
//     ingredient2: "1 sugar cube",
//     ingredient3: "0.5 oz. fresh lime juice",
//     ingredient4: "2 oz. gin",
//     ingredient5: "ginger ale",
//     ingredient6:"1 lime widge",
//     Instruction:"Combine all ingredients, then stir and strain into a cocktail glass. Garnish with a lemon twist."
//   });
//   tipple.create({
//     name: "THE BLACK VLAD",
//     ingredient1: "1 oz. Samogon ",
//     ingredient2: "1 oz. Black Strap Rum",
//     ingredient3: "1 oz. lime juice, freshly squeezed",
//     ingredient4: "0.75 oz. Falernum Liqueur",
//     ingredient5: "1 dash Angostura Bitters",
//     ingredient6:"",
//     Instruction:"Combine in a cocktail shaker and stir. Strain into a highball glass over crushed ice. Garnish with mint or rosemary."
//   });
//   tipple.create({
//     name: "SOUR-CHERRY GIN SMASH",
//     ingredient1: "6 sour cherries ",
//     ingredient2: "1 sugar cube",
//     ingredient3: "0.5 oz. fresh lime juice",
//     ingredient4: "2 oz. gin",
//     ingredient5: "ginger ale",
//     ingredient6:"1 lime wedge",
//     Instruction:"In a cocktail shaker, combine the cherries and the sugar cube. Muddle until the sugar is broken down. Add the lime juice and gin, and then shake. Strain into a Collins glass filled with ice. Top with a splash of ginger ale and garnish with a lime wedge. "
//   });
//   tipple.create({
//     name: "THE CLASSIC MARGARITA",
//     ingredient1: "2 oz. silver tequila ",
//     ingredient2: "1 oz. Cointreau",
//     ingredient3: "1 oz. lime juice",
//     ingredient4: "",
//     ingredient5: "",
//     ingredient6:"",
//     Instruction:"Chill a cocktail glass and then rub it's rim with lime juice and dip in coarse salt. Combine the tequila, Cointreau, and lime juice together in a cocktail shaker and shake. Strain into the glass over ice and garnish with a lime wedge. "

//   });
//   tipple.create({
//     name: "THE MEXICAN MULE",
//     ingredient1: "2 oz. Bootlegger Vodka ",
//     ingredient2: "0.5 oz. lime juice",
//     ingredient3: "0.75 oz. pineapple juice",
//     ingredient4: "0.5 oz. ginger syrup",
//     ingredient5: "",
//     ingredient6:"",
//     Instruction:"Combine the ingredients into a cocktail shaker and stir. Strain into a rocks glass with ice. Garnish with a splash of savory spiced rum. "

//   });
//   tipple.create({
//     name: "THE MOJITO",
//     ingredient1: "0.5 oz. fresh squeezed lime juice ",
//     ingredient2: "1 tsp super fine sugar",
//     ingredient3: "3 mint leaves",
//     ingredient4: "2 oz. white rum",
//     ingredient5: "club soda",
//     ingredient6:"",
//     Instruction:"In a Collins glass, muddle the lime juice with 1/2 to 1 tsp of sugar. Add the mint leaves and mash against the side of the glass. Fill glass 2/3 full with cracked ice and pour in the rum. pour lime. Top off with club soda. "
//   });
// });

// Syncs with DB
tipple.sync();

// Export
module.exports = tipple;
