const mysql = require('mysql');

function obterConnction() {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'teste123',
        database: 'biblioteca'
    });    
}

function listarUsuarios() {

    connection.connect();

    connection.query('SELECT * FROM usuario LIMIT 2', function (error, results, fields) {

        if (error) throw error;

        imprimir(results);

    });

    connection.end();
}

function imprimir(lista){

    console.log(lista);
}

const connection = obterConnction();

listarUsuarios(connection);
