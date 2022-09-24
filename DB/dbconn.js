const mysql = require('mysql');
const conn = {
  host : 'localhost',
  user : 'workmate',
  password : 'workmate123',
  database : 'MIS'
};
const connection = mysql.createConnection(conn);

module.exports = connection;