import test from 'node:test';
import assert from 'node:assert';
import { encode, decode } from '../src/main';
import { demoStyle } from './mocks/demoStyle';

const cases = [
    undefined,
    null,
    'foo bar',
    [],
    {},
    [1, 2, 3],
    [1, 2, 3, 'foo', 'bar', 'baz'],
    [1, 2, 3, ['foo'], ['bar', 'baz'], 'quux'],
    { foo: 'bar' },
    { foo: 'bar', baz: 'quux', 'fizz': [1, 2, [3], [true, true, false ]] },
]

for (const c of cases) {
    test(`decode(encode(${JSON.stringify(c)})) === ${JSON.stringify(c)}`, () => {
        assert.deepStrictEqual(decode(encode(c)), c);
    });
}


test('encode(demoStyle) = { data: 5520, strings: 143 }', () => {
    const encoded = encode(demoStyle);
    assert.strictEqual(encoded.data.byteLength, 5520);
    assert.strictEqual(encoded.strings.length, 143);
});

// FIXME Fix float encoding
test.todo('decode(encode(demoStyle)) === demoStyle', () => {
    assert.deepStrictEqual(decode(encode(demoStyle)), demoStyle);
})