const assert = require('assert')
const { Utils } = require('../dist/bundle')

describe('Utils', () => {
    const { isPlainObject, deepCopy } = Utils

    it ('isPlainObject', () => {
        assert(isPlainObject({}), '{} is a plain object')
        assert(!isPlainObject([]), '[] is not a plain object')
    })
    it ('deepCopy', () => {
        const origin = { a: 1 }

        assert.deepStrictEqual(origin, deepCopy(origin), 'They are not a same obj')
    })
})
