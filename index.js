import { printError, printSuccess, printHelp } from './services/log.services.js';
import getArgs from './helpers/args.js';
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
		//save token
	}
	//result
};
startCLI();
