import { EnvEditor } from '../src/env-editor';

const testKey = 'NODE_ENV_EDITOR_TEST_KEY';
const testValue = 'test value';

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
		const expected = testValue;

		EnvEditor.set(emptyStringKey, expected);

		expect(EnvEditor.get(emptyStringKey)).toBe(expected);
	});
});

describe('3. Unset values:', () => {
	afterEach(() => EnvEditor.unset(testKey));

	test('1. Unset a key should make its value undefined.', () => {
		EnvEditor.set(testKey, testValue);
		EnvEditor.unset(testKey);

		expect(EnvEditor.get(testKey)).toBeUndefined();
	});

	test('2. Unset a key with an undefined value should work.', () => {
		EnvEditor.unset(testKey);

		expect(EnvEditor.get(testKey)).toBeUndefined();
	});
});
