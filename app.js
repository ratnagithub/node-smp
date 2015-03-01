var express = require ('express'),
	bodyParser = require('body-parser'),
	path = require ('path'),
	app = express();

app.set('appName', 'Students Management System');
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(require('./controllers'));

app.listen(app.get('port'), function(){
    console.log('Server started on port: ' + app.get('port'));
});