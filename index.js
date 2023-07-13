const express = require('express'); //Perintah untuk import library

const app = express() //Membuat variabel baru untuk menampung library express
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get(`/`, function(req, res) {
  res.send('Hello World!');
})

// app.listen(port, () => {
//   console.log('Example app listening on port')
// })

// app.listen(port, function() {
//   console.log('Example app listening on port')
// })

// app.listen(port, () => {