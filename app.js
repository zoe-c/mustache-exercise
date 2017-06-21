const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
// const toDoContent = require('./wOT.js')

const toDoList = {
   toDoList: [
     {"toDoTask":"Learn Node basics",
      "status": "false" },
     {"toDoTask":"Learn Express basics",
      "status": "false" },
     {"toDoTask":"Learn Mustache",
      "status": "false" },
     {"toDoTask":"Learn HTML forms with Express",
      "status": "false" },
     {"toDoTask":"Learn about authentication",
     "status": "false" },
     {"toDoTask":"Learn how to connect to PostgreSQL",
     "status": "false" },
     {"toDoTask":"Learn how to create databases",
     "status": "false" },
     {"toDoTask":"Learn SQL",
     "status": "false" },
     {"toDoTask":"Learn how to connect to PostgreSQL from Node",
     "status": "false" },
     {"toDoTask":"Learn how to connect to use Sequelize",
     "status": "false" }

]};


const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  res.render('todo',toDoList)

})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
