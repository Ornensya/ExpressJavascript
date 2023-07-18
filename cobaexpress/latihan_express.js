const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    return res.send(`<h1>Hello</h1>`);
});
app.post('/tambah', (req, res, next) => {
    const {
        nama,
        stok
    } = req.body;
    console.log(req.headers.token);
    return res.json({
        message: "Berhasil Menambah",
        data : {
            nama,
            stok
        }

    });
})

app.listen(port, () => {
    console.log(`App running at ${port}`)
});