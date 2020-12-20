import { EnvEditor } from '../src/env-editor';

describe('Get values', () => {
	test('Passing an empty string as key should throw', () => {
		expect(EnvEditor.get('')).toThrow(RangeError);
	});

	test('Get and undefined key should return undefined', () => {
		expect(EnvEditor.get('FOO_BAR')).toBeUndefined();
	});
});
