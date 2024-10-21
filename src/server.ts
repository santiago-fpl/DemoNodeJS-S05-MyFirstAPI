import './loadEnvironment.js';
import express from 'express';

// Initialize express library to create an API with NodeJs on our localmachine (127.0.0.1)
// Language used for this script  will be TypeScript (TS)
// This API will allow to recieve requests from our clients and manage our reponse as a server.
const express_app = express();

// Declare what network port do you want to initialize this service
const port = process.env.HOST_PORT ?? '3000';

// Create an array of strings with our student's fullname
const students_array = [
  "Joan Puig",
  "Nahomy Argueta",
  "Dani Galeano",
  "Santiago Fernandez-Pedrera",
  "Satenik Avetisyan",
  "Oriol Fontcuberta Aduart",
  "Oscar Crueñas",
  "Elver Galarga",
  "Daniel Galeano",
  "Denis Podovei",
  "Ivan Vallejo",
  "Nil Marquez",
  "Òscar Cruañas",
  "Quim Pallarés",
  "Paul Aznar",
  "Quim Pallarés"
];
//
// Store the number defining how many
// elements have been found on the array
//
const contador_alumnes = students_array.length;
//
// Specify how the server shall response
// when the user invokes our Endpoint
// on its web browser: http://localhost:3001/alumnes
//
express_app.get('/alumnes', (_, res) => {
//
// With the 'res' parameter, specify to output
// our variable values with JSON format
// when the user requests this Endpoint
//
res.json({contador_alumnes, students_array});
});
//
// Run our EXPRESS API server with the 'listen'
// parameter, and start managinf our clients requests.
express_app.listen(port, () => {
  // http://localhost:${port}/ = Endpoint
  //
  // Display this log to prove on our Terminal
  // that our server is running correctly.
  //
  console.log(`[server]: Server is running at http://localhost:${port}/alumnes`);
});
export default express_app;
