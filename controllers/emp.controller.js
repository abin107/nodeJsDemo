const emp = require('../models/employee.model');

exports.test = function (req,res){
	res.send('controller message');
};	

exports.emp_add = function(req,res){
	console.log(req)
	let employee = new emp(
			{
				name: req.body.name,
				age: req.body.age
			}
		);

	employee.save(function(err) {
		if(err){
			return next(err);
		}
		res.send('Employee Added Successfuly');
		});
};

exports.emp_details = function(req,res){
	emp.findById(req.params.id, function(err,employee){
		if(err)
			return next(err);
		res.send(employee);
	});
};

exports.emp_update = function(req,res){
	emp.findByIdAndUpdate(req.params.id, {$set: req.body},
			function(err,employee){
				if (err) 
					return next(err);
				res.send('Employee data updated');
			}
		);
};

exports.emp_delete = function(req,res){
	emp.findByIdAndRemove(req.params.id, function(err){
		if(err)
			return next(err);
		res.send('Employee deleted');
	});
};