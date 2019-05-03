const request = require('request');
const _ = require('lodash');

// my modules
const {darkSkyKey, mapBoxKey} = require('./config/keys');

// GET Perms
const units = 'units=us';
//const lang = 'lang=eg';
let searchLocationParameters = 'LosAngeles';



/**
 *
 * @param {string} searchLocationParameters
 */
const getLongLat = (searchLocationParameters) => {
	const apiMapboxPath = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchLocationParameters}.json?access_token=${mapBoxKey}`;
	request({
		url: apiMapboxPath,
		json: true,
	}, (err, res) => {
		if (err) {
			throw err;
		} else if (_.isEmpty(res.body.features)) {
			console.log('Unable to find Location');
		} else {
			console.log(res.body.features[0].center);
			const latitude = res.body.features[0].center[1];
			const longitude = res.body.features[0].center[0];
		}
	});
};

//getLongLat(searchLocationParameters);


/**
 * @author Keith Murphy
 * @param {string} longLat
 * @return void
 */
const getWeather = (longLat) => {
	// 37.8267,-122.4233
	const apiLongLatEndpoint = `https://api.darksky.net/forecast/${darkSkyKey}/${longLat}?${units}`;

	request({
		url: apiLongLatEndpoint,
		json: true,
	}, (err, res) => {
		if (err) {
			throw err;
		} else if (res.body.error) {
			console.log('Unable to find location');
		} else {
			const temperature = res.body.currently.temperature;
			const precipProbability = res.body.currently.precipProbability;
			const dailySummary = res.body.daily.data[0].summary;

			console.log(`${dailySummary} \nIt is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
		}
	});
};
