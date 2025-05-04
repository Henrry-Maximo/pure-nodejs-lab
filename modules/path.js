const path = require('path');

// __filename -> arquivo atual

// Basename
console.log(path.basename(__filename)); //  path.js

// Diretório atual
console.log(path.dirname(__filename)); // C:\Users\Henrr\Desktop\Workspace Dev\Rocketseat\curso-nodejs-dicasparadevs\modules

// Extensão arquivo
console.log(path.extname(__filename)); // .js

// A Object
console.log(path.parse(__filename)); 

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"))