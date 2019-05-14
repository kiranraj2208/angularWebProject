var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var collection;

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.post('/insertTask', (req, res) => {
	console.log("Task successfully inserted");
	var db = mongo.connect("mongodb://127.0.0.1:27017/angular", (err, db) => {
	if(err) throw err;
	console.log("connected to mongodb");
	collection = db.collection('tasks');
	console.log(JSON.stringify({index:req.body.index, task:req.body.task, completed:req.body.completed}))
	collection.insert({index:req.body.index, task:req.body.task, completed:req.body.completed});
});
	res.end();
});

app.post('/deleteTask',  (req, res) => {
	var db = mongo.connect("mongodb://127.0.0.1:27017/angular", (err, db) => {
	if(err) throw err;
	console.log("connected to mongodb");
	collection = db.collection('tasks');
	collection.remove({index:req.body.index});
	console.log(`task with index ${req.body.index} deleted`);
});
	res.end();
});

app.post('/updateTask', (req, res) => {
	var db = mongo.connect("mongodb://127.0.0.1:27017/angular", (err, db) => {
	if(err) throw err;
	console.log("connected to mongodb");
	collection = db.collection('tasks');
	collection.update({index:req.body.index}, {$set:{completed:req.body.completed}});
	console.log(`task with index ${req.body.index} updated`);
});
	res.end();
})

app.listen(3000);