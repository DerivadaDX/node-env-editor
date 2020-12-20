export class EnvEditor {

	static get(key: string): string | undefined {
		return process.env[key];
	}

	static set(key: string, value: string): void {
		throw new Error('Not implemented');
	}

	static unset(key: string): void {
		throw new Error('Not implemented');
	}

}
