var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/gymwebsite');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var app = express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/index', function (req, res) {
    var name = req.body.Name;
    var email = req.body.email;
    var age = req.body.age;
    var number = req.body.number;
    var gender = req.body.sex;
    var height = req.body.height;
    var weight = req.body.weight;

    var data = {
        "name": name,
        "gender": gender,
        "Age": age,
        "Height": height,
        "Weight": weight,
        "Number": number,
        "Email": email
    }
    db.collection('users').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('success.html');
})

app.post('/contact', function (req, res) {
    var Department = req.body.dept;
    var Name = req.body.Name;
    var Phone = req.body.phone;
    var Email= req.body.email;
    var Subject = req.body.Subject;
    var Location = req.body.Location;

    var data = {
        "Department": Department,
        "Name": Name,
        "Phone": Phone,
        "Email": Email,
        "Subject": Subject,
        "Location": Location,
    }
    db.collection('contacts').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('success.html');
})

app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");
