var places = require('../places')

places.generate(17.9280669, 83.4243305, 1870.972991981416, function(error, json){
	if(error !== undefined && error !== null){
		console.log('Error: ' + error.message)
		return
	}

	console.log(json)
})