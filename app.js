const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./aula4/modules/escrever');
const ler = require('./aula4/modules/ler');

// const pessoas = 
// [{nome: 'leonardo'}, 
//  {nome: 'danielly'}, 
//  {nome: 'beijamin'}];

//  const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json);

async function lerArquivo (caminho){
   const dados = await ler(caminho);
   renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
lerArquivo(caminhoArquivo);