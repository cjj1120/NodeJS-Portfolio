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

app.use(express.static('Public'))

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {projects: projectList})
})

app.get('/about', (req, res) => {
  res.render('about')
})

const projectList = [
  {
    logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29766346.jpg', 
    title: 'Priority of life',
    description: 'Having a work life balance is the upmost important',
    way: 'Time management and Good habit',
    category: 'lifestyle'

  },
  {
    logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29766346.jpg', 
    title: 'Second priority',
    description: 'Having exercise everyday is important for both the mental and physical',
    way: 'Hiking and Workout',
    category: 'lifestyle'

  },
  {
    logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29766346.jpg', 
    title: 'Third priority',
    description: 'Self reflection and self awareness is important for growth',
    way: 'Journalizing and Introspection',
    category: 'lifestyle'

  }
]


app.listen(port, () => {
    console.log("Server is running on port: " + port)
}) 
// app.listen(3000)

//nodemon autochanges
//so next time use nodemon server.js  