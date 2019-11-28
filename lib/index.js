const mdLinks = (file) => {
  const re = /[^!]\[(\S.*?)\]\((http.*?)\)/g
  const myArray = []
  const fs = require('fs')

  return new Promise((resolve, reject) => {
    if (!file) {
      reject('File path missing')
    }
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject('Md file not found')
      } else {
        let result = re.exec(data)
        if (result===null){
          reject('Links not found in file')
        }
        while (result !== null) {
          const texto = result[1]
          const href = result[2]
          myArray.push({ href, texto })
          result = re.exec(data)
        }
      }
      resolve(myArray)
    })
  })
}

module.exports = mdLinks
