var mysql=require("mysql")

var con= mysql.createConnection({
    host: "localhost",
    user: "andrei",
    password:"tmk44d88",
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connection")
})