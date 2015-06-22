var express = require('express');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

// create our app
var app = express();

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser());

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.

app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
               
  res.send(html);
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements

app.post('/', function(req, res){
  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
 console.log(userName);
  res.send(html);






var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'shubhangi',
  database : 'shubh',
  //table    : 'name'
});

connection.connect();
//mysql.query('use ' + connection.database);
/*var post={name: userName, emp_code: 0};
var query=connection.query('insert into posts SET?', post, function(err, result) {
  if (err) throw err;

  //console.log('The solution is: ', rows[0].solution);
   console.log(query.sql);*/

var sql = "INSERT INTO name (name, emp_code) VALUES ?";
var values = [
    [userName, 0]
   // ['john', 'john@gmail.com', 2],
  //  ['mark', 'mark@gmail.com', 3],
  //  ['pete', 'pete@gmail.com', 4]
];
connection.query(sql, [values], function(err) {
    if (err) throw err;
    //conn.end();
});

connection.end()





});

app.listen(8080);


