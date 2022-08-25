const express = require('express')
const mysql = require('mysql')

const config = {
   host: 'db',
   user: 'root',
   password: 'root',
   database: 'nodedb'
}

const connection = mysql.createConnection(config)
const app = express()

const sql = `INSERT INTO people(name) values('Lucas')`
connection.query(sql)
connection.end() 

app.get('/', (req, res) => {
   res.send('<h1>Lucas Coronel<h1>')
})

app.listen(3000, () => console.log('Server is running on port 3000'))
