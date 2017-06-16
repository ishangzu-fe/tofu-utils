const assert = require('assert')
const { Num } = require('../dist/bundle')

describe('Num', () => {
    it ('+', () => {
        assert.strictEqual(Num.plus(1, 2), 3, '1 + 2 = 3')
        assert.strictEqual(Num.plus(-1, -2), -3, '-1 + -2 = -3')
        assert.strictEqual(Num.plus(0, 0), 0, '0 + 0 = 0')
    })
    it ('-', () => {
        assert.strictEqual(Num.reduce(2, 1), 1, '2 - 1 = 1')
        assert.strictEqual(Num.reduce(-1, -2), 1, '-1 - -2 = 1')
        assert.strictEqual(Num.reduce(0, 0), 0, '0 - 0 = 0')
    })
    it ('*', () => {
        assert.strictEqual(Num.multiply(1, 2), 2, '1 * 2 = 2')
        assert.strictEqual(Num.multiply(-1, -2), 2, '-1 * -2 = 2')
        assert.strictEqual(Num.multiply(0, 0), 0, '0 * 0 = 0')
    })
    it ('/', () => {
        assert.strictEqual(Num.divide(1, 2), .5, '1 / 2 = .5')
        assert.strictEqual(Num.divide(-1, -2), .5, '-1 / -2 = .5')
        assert.throws(() => {
            Num.divide(0, 0)
        }, 'denominator should > 0')
    })
})