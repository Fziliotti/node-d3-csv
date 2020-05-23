const fs = require('fs')
const d3 = require('d3')


// Usando fs.readFile, é uma operação assincrona, logo você precisaria tratar 
// Essa leitura do arquivo aqui é sincrona! logo nao precisa se preocupar com voltar undefined ou nao

const readfileDataAsync = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) reject(err);
    resolve(data)
  });
})

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




const fs = require('fs')
const d3 = require('d3')


// Usando fs.readFile, é uma operação assincrona, logo você precisaria tratar 
// Essa leitura do arquivo aqui é sincrona! logo nao precisa se preocupar com voltar undefined ou nao
const fileData = fs.readFileSync('./teste.csv', 'utf8', function (err, data) {
  if (err) throw err;
  return data
});

const parsedData = d3.csvParse(fileData)

// parsedData é um array de objetos chave valor
console.log(parsedData.filter(item => item.state === 'MO'))
console.log(parsedData.filter(item => item.state === 'MO'))
console.log(parsedData.filter(item => item.state === 'MO'))