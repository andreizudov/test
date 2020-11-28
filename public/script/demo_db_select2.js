var mysql = require('mysql');

var con = mysql.createConnection(
    {
        host: "localhost",
        user: "andrei",
        password: "tmk44d88",
        database:"mydb"

    }
)

con.connect(function(err){
    if (err) throw err;
    con.query("SELECT name FROM 'customers'", function(err, results, fields){
        if (err) throw err;
        console.log(results)
    })
})