import { EnvEditor } from '../src/env-editor';

const testKey = 'NODE_ENV_EDITOR_TEST_KEY';

describe('1. Get values:', () => {
	test('1. Get a non-existent key should return undefined.', () => {
		expect(EnvEditor.get(testKey)).toBeUndefined();
	});

	test('2. Get an existent key should return its value.', () => {
		const knownExistentKey = 'NODE_ENV';

		expect(EnvEditor.get(knownExistentKey)).toBeDefined;
	});
});

describe('2. Set values:', () => {
	test('1. Setting a value should make it exists.', () => {
		const expected = 'test value';

		EnvEditor.set(testKey, expected);

		expect(EnvEditor.get(testKey)).toBe(expected);
	});

	test('2. Setting a value to empty string key should make it exists.', () => {
		const emptyStringKey = '';
		const expected = 'test value';

		EnvEditor.set(emptyStringKey, expected);

		expect(EnvEditor.get(emptyStringKey)).toBe(expected);
	});
});
