import { printError, printSuccess, printHelp } from './services/log.services.js';
import getArgs from './helpers/args.js';
import { TOKEN_DICTIONARY, saveKeyValue } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const savaToken = async token => {
	if (!token.length) {
		printError("Token does'nt exist");
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Token was saved');
	} catch (error) {
		printError(error.message);
	}
};

const startCLI = () => {
	const args = getArgs(process.argv);
	console.log(process.env);
	if (args.h) {
		printHelp();
		//Help
	}
	if (args.s) {
		//save city
	}
	if (args.t) {
		return savaToken(args.t);
		//save token
	}
	//result
	getWeather(process.env.CITY ?? 'Korea');
};
startCLI();
