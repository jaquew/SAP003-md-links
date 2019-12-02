const mdLinks = (file, option) => {
  const re = /[^!]\[(\S.*?)\]\((http.*?)\)/g
  const myArray = []
  const fs = require('fs')
  const request = require('request')

  return new Promise((resolve, reject) => {
    if (!file) {
      reject('File path missing')
    }

    const path = require( 'path' ).resolve( file )
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject('Md file not found')
      } else {
        let result = re.exec(data)
        if (result===null){
          reject('Links not found in file')
        }
        while (result !== null) {
          myArray.push({ href: result[2], texto: result[1] })
          result = re.exec(data)
        }
      }

      if (option.validate===true){
        let index = 1
        myArray.forEach((link) => {      
          request(link.href, function (error, response, body) {
            link.status = response.statusCode
            if (index==myArray.length){
              resolve(myArray)
            }
            index++
          })
        })
      } else {
        resolve(myArray)
      }
    })
  })      
}
  
module.exports = mdLinks
