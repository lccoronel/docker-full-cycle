const express = require('express')
const mysql = require('mysql')

const app = express()
const config = {
   host: 'database',
   user: 'root',
   password: 'root',
   database: 'node_challenge'
}

const connection = mysql.createConnection(config)

function insertUsers() {
   const insertUserSQL = `INSERT INTO people(name) values('Lucas'),('Geisa'),('Leonardo'),('Lilian'),('Lucinha')`
   connection.query(insertUserSQL)
}

function peopleTableValidation() {
   connection.query(`SELECT * from people`, (err) => {
      if (err && err.code === 'ER_NO_SUCH_TABLE') {
         const createPeopleTableSQL = `create table people(id int not null auto_increment, name varchar(255), primary key(id));`
         connection.query(createPeopleTableSQL)
         insertUsers()
      } else {
         insertUsers()
      }
   })
}

peopleTableValidation()

app.get('/', (req, res) => {
   connection.query(`SELECT * from people`, (err, results) => {
      if (err) {
         return res.send('<h1>Opa, tivemos um erro ao listar os nomes dos usuarios</h1>')
      }
   
      return res.send(`
         <h1>Full Cycle Rocks!</h1> 

         <p> - Lista de nomes cadastrados no banco de dados.</p>

         <ul>
            ${results.map(item => (
               `<li>${item.name}</li>`
            ))}
         </ul
      `)
   })
  
   connection.end()
})


app.listen(3000, () => console.log('Server is running on port 3000 🚀'))
