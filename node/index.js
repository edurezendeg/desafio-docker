const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

sql = `INSERT INTO people(name) values ?`
let values = [
    ['Wesley'],
    ['Eduardo'],
    ['Samuel'],
    ['Jose']
]
connection.query(sql,[values])


//connection.end()




app.get('/', (req, res) => {
    const conn = mysql.createConnection(config)
    conn.query(`select name from people;`, function (error, results) {
        if (error) {
            console.log(error);
        }

        let listNames = ""
        results.forEach(res => {
            listNames += "<li>" + res.name + "</li>"
        })

        res.send(`<h1>Full Cycle Rocks!</h1> ${listNames} `)

    })


})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})