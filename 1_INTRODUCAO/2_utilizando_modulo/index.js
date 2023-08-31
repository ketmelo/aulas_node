const fs = require('fs') // FS = file system

fs.readFile('frase.txt', 'utf8', (erro, dados) => {
    if (erro) {
        console.log (erro)
        return
    }
    console.log(dados)
}
)