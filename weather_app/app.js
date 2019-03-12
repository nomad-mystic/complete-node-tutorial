const request = require('request');

// my modules
const {darkSkyKey, mapBoxKey} = require('./config/keys');

// GET Perms
const units = 'units=us';
//const lang = 'lang=eg';

const apiBasePath = `https://api.darksky.net/forecast/${darkSkyKey}/37.8267,-122.4233?${units}`;

//console.log(apiBasePath);

request({
	'url': apiBasePath,
	json: true,
}, (err, res) => {
	if (err) {
		throw err;
	}

	const temperature = res.body.currently.temperature;
	const precipProbability = res.body.currently.precipProbability;
	const dailySummary = res.body.daily.data[0].summary;

	console.log(`${dailySummary} \nIt is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
});
