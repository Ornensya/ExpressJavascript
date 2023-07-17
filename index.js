const express = require('express'); //Perintah untuk import library
const pool = require("./connection.js");

// const express = require('express');
// import express from 'express';
// const {json} = require('express') // untuk menambahkanobjek yang diinginkan dengan tekan ctrl+space
// const pool = require("./connection.js");
// import pool from './connection.js';

const app = express();
const port = 3000;

// import { hi } from "./function.mjs"

// console.log(Hii());

app.get("/", (req, res) => {
  // query database
  let id = 5;
  pool.query("SELECT * FROM barang order by id asc", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);

    const dataIni = [];
    results.rows.forEach((item) => {
      dataIni.push({
        nama_barang: item.nama_barang,
        harga: Number(item.harga) * 2
      });
    });

    res.send(dataIni);
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});