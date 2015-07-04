module.exports = {
	
	author: [
		'####   ###  #      ###    ### #####',
		'#   # #   # #     #   #    #    #',
		'####  ##### #     #####    #    #',
		'#   # #   # #     #   #    #    #',
		'####  #   #  #### #   # ###   #####'
	].join("\n"),

	key: '',

	placeType: '',

	url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',

	generate: function(lat, lon, radius, callback){
		if(	lat === undefined || lat === null ||
			lon === undefined || lon === null ||
			radius === undefined || radius === null ||
			callback === undefined || callback === null ){
			return
		}

		var https = require('https')
		var json = ''
		https.get(
			this.url + '?key=' + this.key + '&location=' + lat + ',' + lon + '&radius=' + radius, 
			function(res){
				res.setEncoding('utf8')
				res.on('data', function(data){
					json += data
				})
				res.on('end', function(){
					callback(undefined, json)
				})
				res.on('error', function(error){
					callback(error)
				})
			}
		).on('error', function(error){
			callback(error)
		})
	},

	generateFromParamString: function(paramString, callback){
		if(	paramString === undefined || paramString === null ||
			callback === undefined || callback === null ){
			return
		}

		var https = require('https')
		var json = ''
		//better checker needed
		if(paramString.charAt(0) !== '&'){
			paramString = '&' + paramString
		}

		https.get(
			this.url + '?key=' + this.key + paramString, 
			function(res){
				res.setEncoding('utf8')
				res.on('data', function(data){
					json += data
				})
				res.on('end', function(){
					callback(undefined, json)
				})
				res.on('error', function(error){
					callback(error)
				})
			}
		).on('error', function(error){
			callback(error)
		})
	},

	generateNext: function(pageToken, callback){
		if(	pageToken === undefined || pageToken === null ||
			callback === undefined || callback === null ){
			return
		}

		var https = require('https')
		var json = ''
		https.get(
			this.url + '?key=' + this.key + '&pagetoken=' + pageToken, 
			function(res){
				res.setEncoding('utf8')
				res.on('data', function(data){
					json += data
				})
				res.on('end', function(){
					callback(undefined, json)
				})
				res.on('error', function(error){
					callback(error)
				})
			}
		).on('error', function(error){
			callback(error)
		})
	}
}