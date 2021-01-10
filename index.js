const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'teste123',
    database: 'biblioteca'
});


connection.connect();

connection.query('SELECT * FROM usuario LIMIT 2', function (error, results, fields) {

    if (error) throw error;

    console.log(results);

});

connection.end();