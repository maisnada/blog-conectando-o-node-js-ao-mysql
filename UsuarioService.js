const connectionFactory = require('./connectionFactory');

let UsuarioDao = require('./UsuarioDao');

class UsuarioService {

    constructor() { }

    listarUsuarios = async () => {

        let connection = await connectionFactory.get();

        let usuarioDao = new UsuarioDao(connection);

        return await usuarioDao.listarUsuarios();
    }
}

module.exports = UsuarioService;
