export const timeout = (ms: number) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(null);
		}, ms);
	});
