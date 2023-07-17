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
  pool.query("SELECT * FROM barang order by id asc", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
  //   const data = results.rows.map(item => {
  //     return{
  //       nama_barang: item.nama_barang,
  //       harga: item.harga
  //     };
  //   });
  //   console.log(data);
  //   res.send(data);
  // });
  const data;
  data.forEach(function (item){
    return{
      nama_barang: item.nama_barang,
      harga : item.harga
    };
    
})
});
res.send(data);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});