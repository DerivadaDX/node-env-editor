import { EnvEditor } from '../src/env-editor';

const testKey = 'NODE_ENV_EDITOR_TEST_KEY';

describe('1. Get values:', () => {
	test('1. Get a non-existent key should return undefined.', () => {
		expect(EnvEditor.get('')).toBeUndefined();
		expect(EnvEditor.get(testKey)).toBeUndefined();
	});

	test('2. Get an existent key should return its value.', () => {
		const knownExistentKey = 'NODE_ENV';

		expect(EnvEditor.get(knownExistentKey)).toBeDefined;
	});
});
