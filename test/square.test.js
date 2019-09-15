const assert = require('assert')
const Square = require('../Js/square')

describe('Square', () => {

  describe('getSide', () => {

    it('Should return 0 when created without side', () => {
      const data = new Square()
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when created with an undefined side', () => {
      const data = new Square(undefined)
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

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

    it('Should return 0 when created with an object', () => {
      const data = new Square({})
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when created with an array', () => {
      const data = new Square([])
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

  })

  describe('setSide', () => {

    it('Should return 5 when is setted with a side of 5', () => {
      const data = new Square()
      data.side = 5
      const result = data.side
      const expected = 5
      assert.equal(result, expected)
    })

    it('Should return 6.27 when is setted with a side of 6.27', () => {
      const data = new Square()
      data.side = 6.27
      const result = data.side
      const expected = 6.27
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a side of -1', () => {
      const data = new Square()
      data.side = -1
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a character', () => {
      const data = new Square()
      data.side = 'a'
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a true valor', () => {
      const data = new Square()
      data.side = true
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a false valor', () => {
      const data = new Square()
      data.side = false
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with an object', () => {
      const data = new Square()
      data.side = {}
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with an array', () => {
      const data = new Square()
      data.side = []
      const result = data.side
      const expected = 0
      assert.equal(result, expected)
    })

  })

  describe('Area', () => {

    it('Should return 25 when is created with a side of 5', () => {
      const data = new Square(5)
      const result = data.area()
      const expected = 25
      assert.equal(result, expected)
    })

    it('Should return 6.25 when is created with a side of 2.5', () => {
      const data = new Square(2.5)
      const result = data.area()
      const expected = 6.25
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a side of 0', () => {
      const data = new Square(0)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a undefined side', () => {
      const data = new Square(undefined)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side a character', () => {
      const data = new Square('a')
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an object', () => {
      const data = new Square({})
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an array', () => {
      const data = new Square([])
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an true value', () => {
      const data = new Square(true)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an false value', () => {
      const data = new Square(false)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

  })

  describe('Perimeter', () => {

    it('Should return 20 when is created with a side of 5', () => {
      const data = new Square(5)
      const result = data.calculatePerimeter()
      const expected = 20
      assert.equal(result, expected)
    })

    it('Should return 10 when is created with a side of 2.5', () => {
      const data = new Square(2.5)
      const result = data.calculatePerimeter()
      const expected = 10
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a side of 0', () => {
      const data = new Square(0)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a undefined side', () => {
      const data = new Square(undefined)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side a character', () => {
      const data = new Square('a')
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an object', () => {
      const data = new Square({})
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an array', () => {
      const data = new Square([])
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an true value', () => {
      const data = new Square(true)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with side of an false value', () => {
      const data = new Square(false)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

  })

})