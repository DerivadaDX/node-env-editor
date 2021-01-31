import { EnvEditor } from '../src/env-editor';

describe('1. Get values:', () => {
	test('1. Get a non-existent key should return undefined.', () => {
		expect(EnvEditor.get('')).toBeUndefined();
		expect(EnvEditor.get('hopefully_non-existent_key')).toBeUndefined();
	});

	test('2. Get and undefined key should return undefined', () => {
		expect(EnvEditor.get('FOO_BAR')).toBeUndefined();
	});
});
