const express = require('express'); //Perintah untuk import library
const app = express() //Membuat variabel baru untuk menampung library express
const port = 3000
const pool = require('./db/connection');

app.get('/', (req, res) => {
  pool.query('SELECT * FROM tabelornensya', (error, results)=> {
    if (error) {
      throw error;
    }
    res.send(results.row);
  });
})

// app.get(`/`, function(req, res) {
//   res.send('Hello World!');
// })
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})