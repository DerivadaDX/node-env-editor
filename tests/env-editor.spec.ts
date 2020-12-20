import { EnvEditor } from '../src/env-editor';

describe('Get values', () => {
	test('Get and undefined key should return undefined', () => {
		expect(EnvEditor.get('FOO_BAR')).toBeUndefined();
	});
});
