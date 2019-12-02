#!/usr/bin/env node
const mdLinks = require('./lib/index.js')

const file = process.argv[2]
let option = {validate: true}
process.argv[3] === '--validate' ? option.validate = true : option.validate = false

mdLinks(file, option)
  .then((result) => {
    result.forEach((link) => {
      if (link.status){
        console.log(`${link.texto}: ${link.href}, ${link.status}`)
      }
      else {
        console.log(`${link.texto}: ${link.href}`)
      }
    })
  })
  .catch((error) => console.log(error))