const functions = require('@google-cloud/functions-framework'); \
const mysql = require("mysql"); \

Create a connection to the database \
const connection = mysql.createConnection({ \
  connectionLimit: 10, \
  host: "34.71.72.102", \
  user: "root", \
  password: "password123", \
  database: "MyPicz", \
  //port: dbConfig.PORT \
}); \

 HTTP Cloud Function. \
functions.http('infoUser', (req, res) => { \
  connection.query("SELECT * FROM user",(err,user)=>{ \
    if(err) return res.json(err) \
    res.json(user) \
  }) \
}); 
