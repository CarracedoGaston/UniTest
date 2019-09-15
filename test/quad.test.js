const assert = require('assert')
const Quad = require('../Js/quad')

describe('Quad', () => {

  describe('getWidth', () => {

    it('Should return 0 && 5 when created with a undefined height and a width of 5', () => {
    const data = new Quad(undefined, 5)
    const result = [data.height, data.width]
    const expected = [0, 5]
    assert.deepEqual(result, expected)
    })

    it('Should return 0 && 6.27 when created with a undefined height and a width of 6.27', () => {
      const data = new Quad(undefined, 6.27)
      const result = [data.height, data.width]
      const expected = [0, 6.27]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of -1', () => {
      const data = new Quad(undefined, -1)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of a character', () => {
      const data = new Quad(undefined, 'a')
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of an array', () => {
      const data = new Quad(undefined, [])
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of an object', () => {
      const data = new Quad(undefined, {})
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of a true valor', () => {
      const data = new Quad(undefined, true)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of a false valor', () => {
      const data = new Quad(undefined, false)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

})