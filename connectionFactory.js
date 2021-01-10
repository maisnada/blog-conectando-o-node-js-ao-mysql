const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'teste123',
    database: 'biblioteca',
    connectionLimit: 5,
};

const connectionPool = mysql.createPool(config);

const get = () => {

    return new Promise((resolve, reject) => {

        connectionPool.getConnection((erro, connection) => {

            if (erro)
                return reject(erro);

            resolve(connection);

        });
    })
}

module.exports = { get };