const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')


const app = express();
// Connect to mongDB
const dbURI = 'mongodb+srv://aaron-alley:Esmaelouise1@cluster0.dgrp0.mongodb.net/node-tuts?retryWrites=true&w=majority'

mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => {
  console.log(err)
})

// Register view engine

app.set('view engine', 'ejs');

// listen for requests
;



// Middleware + static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
// Middleware

// app.use((req, res, next) => {
//   console.log('new request made');
//   console.log('Host: ', req.hostname);
//   console.log('Path: ', req.path);
//   console.log('Method: ', req.method);
//   next();
// })

// Mongoose and mogo sandbox routes
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'New blog 2',
//     snippet: 'About my blog',
//     body: 'more about my new blog'
//   });

//   blog.save()
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('62019833068854e63896d77e')
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// })

app.get('/', (req, res) => {
  // res.send('<p>Homepage</p>');
  // res.sendFile('./views/index.html', { root: __dirname});
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  // res.send('<p>About page</p>');
  // res.sendFile('./views/about.html', { root: __dirname});
  res.render('about', {
    title: 'About'
  })
});

// redirects

// app.get('/about-us', (req, res) => {
//   res.redirect('/about')
// })

// blog routes

app.use(blogRoutes)
// 404 page

app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root: __dirname})
  res.status(404).render('404', {
    title: '404'
  })
})