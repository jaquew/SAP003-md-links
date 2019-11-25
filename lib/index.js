const mdlinks = (file) => {
  const re = /\[(.*)\]\((ht.*)\)/gm
  let result = 0
  let myArray = []  
  const fs = require('fs')
  file = process.argv[2];

  fs.readFile(file, 'utf8', (err, data) => {
    // console.log(data);
    
    // console.log(data.match(re))
    do {
      result = re.exec(data)  

      if (result !== null ){
        
        const href = result[1]        
        const texto = result[2]
 
        myArray.push({href,texto})
      }
    }  while (result !== null)
    console.log(myArray);
  });
  

  //com promise
  // const Promise = require('promise');
  // const readFile = Promise.denodeify(fs.readFile);
  // readFile(file).then((content) => console.log(`The file contained ${content.length}`))

} 

mdlinks()
