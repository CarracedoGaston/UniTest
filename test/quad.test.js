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

  describe('getHeight', () => {
    
    it('Should return 5 && 0 when created with a height of 5 and a undefined width', () => {
      const data = new Quad(5, undefined)
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
      })
  
    it('Should return 6.27 && 0 when created with a height of 6.27 and a undefined width', () => {
      const data = new Quad(6.27, undefined)
      const result = [data.height, data.width]
      const expected = [6.27, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a height of -1 and a undefined width', () => {
      const data = new Quad(-1, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of a character and a undefined width', () => {
      const data = new Quad('a', undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a height of an array and a undefined width', () => {
      const data = new Quad([], undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of an object and a undefined width', () => {
      const data = new Quad({}, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of a true valor and a undefined width', () => {
      const data = new Quad(true, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of false valor and a undefined width', () => {
      const data = new Quad(false, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

})