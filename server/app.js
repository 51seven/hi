var express = require('express');
var app = express();
var cons = require('consolidate');

app.engine('html', cons.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views')
app.set('port', 9000);

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/static', express.static(__dirname + '/../app/.tmp/'));

app.listen(app.get('port'));