#!/usr/bin/env node
const mdLinks = require('./lib/index.js')

const file = process.argv[2];

mdLinks(file)
.then((result) => {
  result.forEach((link) =>{
    console.log(`${link.texto}: ${link.href}`);
  });
})
.catch((error) => console.log(error))
