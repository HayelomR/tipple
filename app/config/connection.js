
// Dependencies
var Sequelize = require("sequelize");
var connection;
var pg = require;

// if (process.env.CLEARDB_DATABASE_URL) {
//   if (sequelize) {
//        sequelize.authenticate().then( function() {
//           var config = sequelize.connectionManager.config;
//           console.log('sequelize-heroku: Connected to '+config.host+' as '+config.username+'.');
//
//           sequelize.query('SELECT 1+1 as test').then( function(res) {
//
//               console.log('1+1='+res[0].test);
//
//            });
//
//       }).catch( function(err) {
//           var config = sequelize.connectionManager.config;
//           console.log('Sequelize: Error connecting '+config.host+' as '+config.user+': '+err);
//       });
//   }
//   else
//   {
//     console.log('No environment variable found.');
//   }
// }

//Creates mySQL connection using Sequelize through localhost
var sequelize = new Sequelize("tipple", "root", "",{
  host: 'localhost',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//Creates mySQL connection using Sequelize through Francis's database
var sequelize = new Sequelize("williamwhite", "williamwhite", "32rXr1NInF68",{
  host: 'codeflink.net',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Exports the connection for other files to use
module.exports = sequelize;
