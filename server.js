var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var Posts = require('./models')['Posts'];
Post.synce();

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('handlebars', handlebars({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/new-post', function(req, res) {
	res.render('new');
});

app.get('/post/:id', function(req, res) {
	res.render('post');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('connected to PORT' , port);
});