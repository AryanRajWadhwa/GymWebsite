const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});
var conn = mongoose.Collection;

var userSchema =new mongoose.Schema({
	name: String,
	sex: String,
	age: String,
	height: String,
	weight: String,
	number: Number,
	email: String,
});

var userModel = mongoose.model('User', userSchema);
module.exports=userModel;