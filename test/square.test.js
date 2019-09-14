const assert = require('assert')
const Square = require('../square')

describe('Square', () => {

  describe('getSide', () => {

    it('Should return 5 when created with a side of 5', () => {
      const data = new Square(5)
      const result = data.side
      const expected = 5
      assert.equal(result, expected)
    })

    it('Should return 6.27 when created with a side of 6.27', () => {
      const data = new Square(6.27)
      const result = data.side
      const expected = 6.27
      assert.equal(result, expected)
    })

    it('Should return 0 when created with a side of -1', () => {
      const data = new Square(-1)
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when created with a character', () => {
      const data = new Square('a')
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when created with a true valor', () => {
      const data = new Square(true)
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when created with a false valor', () => {
      const data = new Square(false)
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when created with a object', () => {
      const data = new Square({})
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when created with a array', () => {
      const data = new Square([])
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })


  })

})