module.exports = function (connection) {

    this.connection = connection;

    this.listarUsuarios = function () {        

        return new Promise((resolve, reject) => {          

            this.connection.query('SELECT * FROM usuario LIMIT 2', (error, results, fields) => {

                this.connection.release();

                if (error)
                    return reject(error);

                resolve(results);

            });

        })
    }
}