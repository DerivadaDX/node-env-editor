export class EnvEditor {

	static get(key: string): string | undefined {
		return process.env[key];
	}

	static set(key: string, value: string): void {
		process.env[key] = value;
	}

	static unset(key: string): void {
		throw new Error('Not implemented');
	}

}
