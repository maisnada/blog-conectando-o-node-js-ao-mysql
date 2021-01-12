const UsuarioService = require('././UsuarioService');

let usuarioService = new UsuarioService();

usuarioService.listarUsuarios()
    .then(usuarios => console.log(usuarios))
    .catch(erro => {
        
        console.log(`Ocorreu um erro, tente mais tarde ; [. Descrição: ${erro}`);
    })
