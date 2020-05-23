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