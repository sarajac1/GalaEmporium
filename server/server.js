import express from 'express'
import mysql from 'mysql'
import session from 'express-session'
import { promisify } from 'util'

const server = express()
const port = 3000

// Express now includes a built-in JSON body parser
server.use(express.json())

// Configure Express to use sessions
server.use(session({
  secret: 'keyboard_cat',
  resave: false,
  saveUninitialized: false
}))

// Configure MySQL connection
const db = mysql.createConnection({
  host: '161.97.144.27',
  port: '8024',
  user: 'root',
  password: 'majesticowlsoars',
  database: 'galaemporium'
})

// Promisify the query method
db.query = promisify(db.query).bind(db);

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err)
    return
  }
  console.log('Connected to MySQL database')

  // serve static client directory
  server.use(express.static("../client"));

  
  // Start the server
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })

})
