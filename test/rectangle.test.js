const assert = require('assert')
const Rectangle = require('../Js/rectangle')

describe('Rectangle', () => {

  describe('getHeight && getWidth', () => {

    it('Should return 5 && 4 when is created with a height of 5 and a width of 4', () => {
      const data = new Rectangle(5, 4)
      const result = [data.height, data.width]
      const expected = [5, 4]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 0 when is created with a height of 5 and a width of -1', () => {
      const data = new Rectangle(5, -1)
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 0 when is created with a height of 5 and a width of an character', () => {
      const data = new Rectangle(5, 'a')
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 0 when is created with a height of 5 and a width of []', () => {
      const data = new Rectangle(5, [])
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 0 when is created with a height of 5 and a width of {}', () => {
      const data = new Rectangle(5, {})
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 0 when is created with a height of 5 and a width of a true valor', () => {
      const data = new Rectangle(5, true)
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 0 when is created with a height of 5 and a width of a false valor', () => {
      const data = new Rectangle(5, false)
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
    })

  })
  
})