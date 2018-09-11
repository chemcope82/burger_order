var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    PORT: process.env.PORT || 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err) {
        throw err;
        return
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;