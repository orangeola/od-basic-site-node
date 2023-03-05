const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname+'/about.html'));
})

app.get("/contact-me", function (req, res) {
  res.sendFile(path.join(__dirname+'/contact-me.html'));
})

app.use( function(req, res, next) {
  res.status(404)
  res.sendFile(path.join(__dirname+'/404.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});