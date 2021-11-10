import mysql from 'mysql';
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'employees',
    user: 'root',
    password: 'root'
});

connection.connect(function (err) {
    if (err) {
        console.error('Connection error: ' + err.stack);
        return;
    }
    console.log('Connected to ' + connection.threadId);
});

connection.query('SELECT * FROM employees', function (error, results, fields) {
    if (error) throw error;
    results.forEach(result => {
        console.log(result);
    });
});

connection.end();