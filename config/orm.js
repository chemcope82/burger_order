var connection = require("./connection");

var orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err, result){
            if(err){
                throw err;
                return;
            }
            cb(result);
        });
    },

    insertOne: function(name, cb){
        var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        var val = [name];
        connection.query(query, val, function(err, result) {
            if(err) {
                throw err;
                return;
            }
            cb(result);
        });
    },

    updateOne: function(id, cb){
        connection.query("UPDATE burgers SET devoured = true WHERE id = " + id + "", function(err, result) {
            if(err) {
                throw err;
                return;
            }
            cb(result);
        });
    }
};

module.exports = orm;
