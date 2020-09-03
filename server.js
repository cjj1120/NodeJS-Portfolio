const express = require('express')
const session = require('express-session');
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));


//routing
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {
    projects: projectList
    
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

//Admin
app.get('/admin/login', (req, res) => {
  res.render('admin/login')
})  

//temporary
app.get('/admin/user/logged-in', (req, res) => {
  req.session.isLoggedIn = true
  res.redirect('/') 
})  
 
app.get('/admin/user/logged-out', (req, res) => {
  req.session.isLoggedOut = false
  res.redirect('/')
})  






const projectList = [
  {
    logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29766346.jpg', 
    title: 'Priority of life',
    description: 'Having a work life balance is the upmost important',
    way: 'Time management and Good habit',
    category: 'Lifestyle'

  },
  {
    logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29766346.jpg', 
    title: 'Second priority',
    description: 'Having exercise everyday is important for both the mental and physical',
    way: 'Hiking and Workout',
    category: 'Health'

  },
  {
    logo: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29766346.jpg', 
    title: 'Third priority',
    description: 'Self reflection and self awareness is important for growth',
    way: 'Journalizing and Introspection',
    category: 'Psych'

  }
]


app.listen(port, () => {
    console.log("Server is running on port: " + port)
}) 
// app.listen(3000)

//nodemon autochanges
//so next time use nodemon server.js  