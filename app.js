const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3344;

app.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: '192.168.1.100',
      port: '3306',
      user: 'user1',
      password: 'pwd',
      database: 'mysqlDB',
    });

    const [rows, fields] = await connection.query('SELECT * FROM Persons');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Error executing query.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
