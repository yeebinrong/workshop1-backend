// load libraries
const express = require('express')
const morgan = require('morgan')
const cookie = require('fortune-cookie')
const cors = require('cors')

// create an instance of express
const app = express()

// use morgan to log all requests. Use the combined format
app.use(morgan('combined'));

// cors security bypass
app.use(cors());

// serve static files
app.use(express.static(__dirname + '/frontend'))

// config port
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

// resources
// GET /api/cookie -> application/json { cookie: 'cookie text'}
app.get("/api/cookie", (req, resp) => {
    const count = parseInt(req.query['count']) || 1;
    resp.status(200)
    resp.type('application/json')
    resp.json(cookie.splice(0, count))
})

// Start application
app.listen(PORT, () => {
    console.info(`Application is listening PORT ${PORT} at ${new Date()}.`)
})