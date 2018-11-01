const express = require('express');
const app = express();
const routes = require('./routes/routes')(db)
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', routes);



//put this last
app.listen(3000, () => console.log('App listening'));
