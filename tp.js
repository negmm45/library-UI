import mysql from 'mysql2';
 
const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '360800800',
      database: 'project'
}).promise();
console.log("pool created");

export default pool;