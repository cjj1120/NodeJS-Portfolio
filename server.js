const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () => {
    console.log("Server is running on port: " + port)
}) 
// app.listen(3000)

//nodemon autochanges
//so next time use nodemon server.js  