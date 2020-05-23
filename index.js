const fs = require('fs')
const d3 = require('d3')

// Simple promisify readFile function.
const readfileDataAsync = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) reject(err);
    resolve(data)
  });
})

// Simple promisify readFile function with normal function
function readfileDataAsync2(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) reject(err);
      resolve(data)
    });
  })
}

async function readAndParse() {

  const fileData = await readfileDataAsync2('./teste.csv')
  const fileDataParsed = d3.csvParse(fileData)

  console.log(fileDataParsed)
}

readAndParse()

// parsedData é um array de objetos chave valor
// console.log(parsedData.filter(item => item.state === 'MO'))
// console.log(parsedData.filter(item => item.state === 'MO'))
// console.log(parsedData.filter(item => item.state === 'MO'))

