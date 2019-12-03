/* eslint global-require: 0 */
/* eslint prefer-promise-reject-errors: 0 */

const mdLinks = (file, option) => {
  const re = /[^!]\[(\S.*?)\]\((http.*?)\)/g;
  const myArray = [];
  const fs = require('fs');
  const request = require('request'); // eslint-disable-line import/no-extraneous-dependencies

  return new Promise((resolve, reject) => {
    if (!file) {
      reject('File path missing');
    }

    const path = require('path').resolve(file);
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject('Md file not found');
      } else {
        let result = re.exec(data);
        if (result === null) {
          reject('Links not found in file');
        }
        while (result !== null) {
          myArray.push({ href: result[2], texto: result[1] });
          result = re.exec(data);
        }
      }

      if (option && option.validate === true) {
        let index = 1;
        myArray.forEach((link) => {
          request(link.href, (error, response, body) => { // eslint-disable-line no-unused-vars
            link.status = response.statusCode; // eslint-disable-line no-param-reassign
            if (index === myArray.length) {
              resolve(myArray);
            }
            index += 1;
          });
        });
      } else {
        resolve(myArray);
      }
    });
  });
};

module.exports = mdLinks;
