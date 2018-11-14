const express = require('express');
const bodyParser = require('body-parser');

const emp = require('./routes/emp.route');

const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://abin107:password1@ds137863.mlab.com:37863/employee_demo_db';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/emp',emp);

let port = 1234;

app.listen(port , () => {
	console.log('Server is running');
})