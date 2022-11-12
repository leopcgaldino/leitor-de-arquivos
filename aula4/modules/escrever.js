const fs = require('fs').promises;

//cria arquivo frase1 no caminho especificado acima
module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, { flag: 'w'});
}