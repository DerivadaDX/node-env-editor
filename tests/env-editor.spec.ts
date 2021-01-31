import { EnvEditor } from '../src/env-editor';

describe('1. Get values:', () => {
	test('1. Passing an empty string as key should throw', () => {
		expect(() => EnvEditor.get('')).toThrow(RangeError);
	});

	test('2. Get and undefined key should return undefined', () => {
		expect(EnvEditor.get('FOO_BAR')).toBeUndefined();
	});
});
