const mySql = require('mysql');

const dbConnection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql_crud_db'
});

dbConnection.connect(function(error) {
    if (error) {
        throw error;
    }

    console.log('Database Connected Successfully');
});

module.exports = dbConnection;