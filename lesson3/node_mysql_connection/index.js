var fs = require('fs');
var mysql = require('mysql');

var config = JSON.parse(fs.readFileSync("config-secret.json"))

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database
});

connection.connect();

connection.query('INSERT INTO user (name, email, phone) VALUES(?, ?, ?) ', ['Stripes3', 'stripes@gmail.com', '111-222-333'], function(error, results, fields) {
    console.log(results);
});

connection.query('SELECT * FROM user', function(error, results, fields) {
    console.log(results);
});



connection.end();
