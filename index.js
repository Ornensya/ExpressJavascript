// const express = require('express'); //Perintah untuk import library
// const app = express() //Membuat variabel baru untuk menampung library express
// const port = 3000
// const pool = require("./connection.js");

// app.get('/', (req, res) => {
//   pool.query('SELECT * 1 + 1', (error, results)=> {
//     if (error) {
//       throw error;
//     }
//     console.log(results);
//     res.send(results.row);
//   });
// })

// // app.get(`/`, function(req, res) {
// //   res.send('Hello World!');
// // })
// app.listen(port, function() {
//   console.log(`Example app listening on port ${port}`);

// })

const express = require('express');

const pool = require("./connection.js");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  // query database
  pool.query("SELECT * FROM tabelproduk", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    res.send(results.rows);
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});