const mdLinks = (file) => {
  
  const re = /\[(\S.*?)\]\((http.*?)\)/g
  let myArray = []  
  const fs = require('fs')

  return new Promise((resolve, reject) => {
    if (!file) {
      reject('File path missing')
    }  
    fs.readFile(file, 'utf8', (err, data) => {
      let result = re.exec(data)  
      do {
        const texto = result[1]
        const href = result[2]        
        myArray.push({href, texto})
        result = re.exec(data)  
        
      }  while (result !== null)
      resolve(myArray)
    }); 
  })
}
 


module.exports = mdLinks;
