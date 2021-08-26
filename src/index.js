const path =  require('path');
const express = require('express');
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Template engine
// Template engine
app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/news', function (req, res) {
  res.render('news');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})