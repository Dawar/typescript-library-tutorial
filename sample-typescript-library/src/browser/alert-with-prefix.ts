interface IAlertWithPrefixOptions {
	prefix: string;
	message: string;
}

export const alertWithPrefix = (options: IAlertWithPrefixOptions) => {
	alert(`${options.prefix}${options.message}`);
}
