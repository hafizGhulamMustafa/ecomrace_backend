const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "estore",
});

con.connect((error, result) => {
  if (error) {
    console.log(error);
  }
  console.log("connected");
});


module.exports = con;
