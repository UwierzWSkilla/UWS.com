const cool = require('cool-ascii-faces');
const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.get("/", function (req, res){
  res.send("mixin' codeine");
});

app.listen(process.env.PORT || 5000);
































window.addEventListener("hashchange", function(){
    const hash = window.location.hash.replace("#", "") || "home"
    const [page, article] = hash.split("/")

    document.querySelectorAll(".page").forEach(function($e){
        $e.classList.add("is-hidden")
    })

    document.getElementById(hash).classList.remove("is-hidden")
});