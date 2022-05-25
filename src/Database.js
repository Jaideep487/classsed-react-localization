const res = require('express/lib/response');
const {createPool} = require('mysql');

const db = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"jaideep",
    connectionLimit: 10
})

const sqlInstert = "INSERT INTO users (lname)";
db.query(sqlInstert ,(err , result )=>{
    
})
