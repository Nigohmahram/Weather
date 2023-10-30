import axios from 'axios';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';
import https from 'https';

const getWeather = async city => {
	//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error("API doesn't exist, -t [API_KEY] for saving token");
	}

	const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'kr',
			units: 'metric',
		},
	});
	return data;

	// const url = new URL('https://api.openweathermap.org/data/2.5/weather');
	// url.searchParams.append('q', city);
	// url.searchParams.append('appid', token);
	// url.searchParams.append('units', 'metric');
	// https.get(url, response => {
	// 	let res = '';
	// 	response.on('data', chunk => {
	// 		res += chunk;
	// 	});
	// 	response.on('end', () => {
	// 		console.log(res);
	// 	});
	// });
};
export { getWeather };
