var orm = require("../config/orm");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertOne: function(name, cb){
        orm.insertOne(name, function(res){
            cb(res);
        });
    },

    updateOne: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;