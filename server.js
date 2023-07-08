//import database setup utils
const createDB = require('./database/utils/createDB');
const seedDB = require('./database/utils/seedDB');

//import Sequelize instance
const db = require('./database');

//sync and seed
const syncDatabase = async () => {
    try {
      //the {force: true} option will clear the database tables
      //every time we restart the server
      //remove the option if you want the data to persist, ie: 
      //await db.sync();
  
      await db.sync({force: true});
      console.log('------Synced to db--------')
      await seedDB();
      console.log('--------Successfully seeded db--------');
    } catch (err) {
      console.error('syncDB error:', err);
    }  
}


//import express library
const express = require("express");

//create express server
const server = express();

//express router: import routes we defined
const apiRouter = require('./routes');

//initialize express server
const cors = require('cors')

const configureServer = async () => {
    // handle request data
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    //ignore browser requests for favicon file
    server.get('/favicon.ico', (req, res) => res.status(204));
  
  
    //define a route
    server.get("/hello", (request, response) => {
      response.send("hello world!")
    });
  
    // Mount apiRouter
    server.use("/api", apiRouter);           // access users data like http://localhost:5001/api/users
  
  
    // Handle page not found:
    // gets triggered when a request is made to
    // an undefined route 
    server.use((req, res, next) => {
      const error = new Error("Not Found, Please Check URL!");
      error.status = 404;
      next(error);
    });
  
    // Error-handling middleware: 
    // all express errors get passed to this
    // when next(error) is called 
    server.use((err, req, res, next) => {
      console.error(err);
      console.log(req.originalUrl);
      res.status(err.status || 500).send(err.message || "Internal server error.");
    });
  
};
  

const bootServer = async () => {
    //creates local database if it doesn't exist
    await createDB();
  
    //calls sync which is a Sequelize method that creates the database tables
    //calls seedDB which will insert initial data into the tables
    await syncDatabase();
  
    //express setup - define routes and middleware
    await configureServer();
};



// PROGRAM STARTS HERE


bootServer();


const PORT = 5001;
server.listen(PORT, console.log(`Server started on ${PORT}`));