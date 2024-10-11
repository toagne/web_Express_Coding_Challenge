const express = require('express')
//const { Pool } = require('pg')
const app = express()
/*
app.use(express.json()) // Parse incoming Json requests

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'youruser',
  host: 'localhost',
  database: 'tododb',
  password: 'yourpassword',
  port: 5432,
})

app.use(express.json())
*/

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Start the server
const port = 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })