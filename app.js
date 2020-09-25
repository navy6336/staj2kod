const express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

const session = require('express-session');
const app = express();
const mysql      = require('mysql');
let bodyParser=require("body-parser");
let connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '',
              database : 'test'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// development only
 
app.get('/', routes.index);//call for main index page
app.get('/login',user.login);
app.post('/login',user.loginPOST);
app.get('/second',user.second);
app.post('/second',routes.index);
app.get('/logout',user.logout);
app.get('/hasta',user.hasta);
app.post('/hasta',routes.index);
app.get('/kayit',user.kayit);
app.post('/kayit',user.kayitPOST);
//Middleware
app.listen(8080)
