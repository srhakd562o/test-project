const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/databases');
const Student = require('./models/student');
const attendanceRoutes = require('./routes/attendance');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/attendance', attendanceRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

sequelize.sync()
  .then(result => {
    console.log('Database connected');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
