// Here we import a common module from the root exports
import { timeout } from 'sample-typescript-library';

// Here we import node-specific code
import { getPackage } from 'sample-typescript-library/node';

async function main() {
	console.log('logging package in 5...');
	await timeout(5000);
	console.log(getPackage());
}

main();
