const express = require('express'); //Perintah untuk import library

const app = express() //Membuat variabel baru untuk menampung library express
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// Menambah function baru di file js
const arrow = function(res) {
   return res("Hello world")
}
console.log(arrow(res));

// app.listen(port, () => {