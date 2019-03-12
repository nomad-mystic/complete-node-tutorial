const request = require('request');

// my modules
const keys = require('./config/keys');

const apiBasePath = `https://api.darksky.net/forecast/${keys.apiKey}/37.8267,-122.4233`;

request({
	'url': apiBasePath,
}, (err, res) => {
	if (err) {
		throw err;
	}
	const data = JSON.parse(res.body);
	console.log(data.currently);
//	console.log(res);
});
