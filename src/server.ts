import './loadEnvironment.js';
import express from 'express';

const app = express();

const port = process.env.HOST_PORT ?? '3000';

const students_array = [
  "Laura Méndez",
"Emilio Sánchez",
"Carla Jiménez",
"Manuel Rodríguez",
"Valeria Hernández",
"Ricardo Montes",
"Adriana Campos",
"Roberto Díaz",
"Lucía Paredes",
"Gabriel Fernández",
"Esteban Moreno",
"Sofía Castro",
"Diego Romero",
"Marta Guillén",
"Javier Ortega",
"Clara Vázquez"
];

const contador_students = students_array.length;

app.get('/students', (_, res) => {

res.json({contador_students, students_array});
});

app.listen(port, () => {

  console.log(`[server]: Server is running at http://localhost:${port}/students`);
});
export default app;
