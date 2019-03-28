// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
 selectAll: function(whatToSelect, tableInput) {
     var queryString = "SELECT ?? FROM ??";
     connection.query(queryString, [whatToSelect, tableInput], function (err, results) {
         if (err) throw err;
         console.log(result);

     });

},

insertOne: function(tableInput)

}

function updateOne () {

}
};
module.exports = orm;