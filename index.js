const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`)
    next()
})

app.get('/', (req, res) => {
    res.send('<h1>This is the game!</h1>')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})
