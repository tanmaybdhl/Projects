const express = require("express")
const app = express()

// Database config
const connection = require('./config/db.config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

// Routes Config
app.use(express.json({
    extended: false
})); //parse incoming request body in JSON format.
app.use('/api/url', require('./routes/url'))
app.use('/', require('./routes/redirect'))


//Listen for incoming requests
const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))