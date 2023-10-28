import { printError, printSuccess, printHelp } from './services/log.services.js';
import getArgs from './helpers/args.js';
import { saveKeyValue } from './services/storage.service.js';

const savaToken = async token => {
	try {
		await saveKeyValue('token', token);
		printSuccess('Token was saved');
	} catch (error) {
		printError(error.message);
	}
};

const startCLI = () => {
	const args = getArgs(process.argv);
	console.log(args);
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
};
startCLI();
