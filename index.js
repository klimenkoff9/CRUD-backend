const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const db = require("./db");
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());



//API Routes
app.use("/api", require("./api"));

//Start Up Function with node server.js
const startUp = () => {
	const server = app.listen(8080, () => {
		console.log("I am listening for database");
	});
};

//DB Sync Function
//Optional parameters
// {force:true} - drops current tables and places new empty tables
//{alter:true} - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

const syncDb = () => db.sync({alter:true});
// Connects to //postgres://localhost:5432/pokemonlive

//Run server and sync DB
startUp();
syncDb();
