const assert = require('assert')
const Rectangle = require('../Js/rectangle')

describe('Rectangle', () => {

  describe('getWidth && getHeight', () => {

    it('Should return 0 && 0 when created without width and height', () => {
      const data = new Rectangle()
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with an undefined width height', () => {
      const data = new Rectangle(undefined, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

  describe('getWidth', () => {

    it('Should return 0 && 5 when created with a undefined height and a width of 5', () => {
    const data = new Rectangle(undefined, 5)
    const result = [data.height, data.width]
    const expected = [0, 5]
    assert.deepEqual(result, expected)
    })

    it('Should return 0 && 6.27 when created with a undefined height and a width of 6.27', () => {
      const data = new Rectangle(undefined, 6.27)
      const result = [data.height, data.width]
      const expected = [0, 6.27]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of -1', () => {
      const data = new Rectangle(undefined, -1)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of a character', () => {
      const data = new Rectangle(undefined, 'a')
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of an array', () => {
      const data = new Rectangle(undefined, [])
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of an object', () => {
      const data = new Rectangle(undefined, {})
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of a true value', () => {
      const data = new Rectangle(undefined, true)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of a false value', () => {
      const data = new Rectangle(undefined, false)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

  describe('getHeight', () => {
    
    it('Should return 5 && 0 when created with a height of 5 and a undefined width', () => {
      const data = new Rectangle(5, undefined)
      const result = [data.height, data.width]
      const expected = [5, 0]
      assert.deepEqual(result, expected)
      })
  
    it('Should return 6.27 && 0 when created with a height of 6.27 and a undefined width', () => {
      const data = new Rectangle(6.27, undefined)
      const result = [data.height, data.width]
      const expected = [6.27, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a height of -1 and a undefined width', () => {
      const data = new Rectangle(-1, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of a character and a undefined width', () => {
      const data = new Rectangle('a', undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a height of an array and a undefined width', () => {
      const data = new Rectangle([], undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of an object and a undefined width', () => {
      const data = new Rectangle({}, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of a true value and a undefined width', () => {
      const data = new Rectangle(true, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of false value and a undefined width', () => {
      const data = new Rectangle(false, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

  describe('setWidth && setHeight', () => {

    it('Should return 0 && 0 when is setted with a undefined height and width', () => {
      const data = new Rectangle()
      data.height = undefined
      data.width = undefined
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 5 when is setted with a height of 5 and a width of 5', () => {
      const data = new Rectangle()
      data.height = 5
      data.width = 5
      const result = [data.height, data.width]
      const expected = [5, 5]
      assert.deepEqual(result, expected)
    })

    it('Should return 6.27 && 6.27 when is setted with a height of 6.27 and a width of 6.27', () => {
      const data = new Rectangle()
      data.height = 6.27
      data.width = 6.27
      const result = [data.height, data.width]
      const expected = [6.27, 6.27]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of -1 and a width of -1', () => {
      const data = new Rectangle()
      data.height = -1
      data.width = -1
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of "a" and a width of "a"', () => {
      const data = new Rectangle()
      data.height = 'a'
      data.width = 'a'
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of a true value and a width of a true value', () => {
      const data = new Rectangle()
      data.height = true
      data.width = true
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of a false value and a width of a false value', () => {
      const data = new Rectangle()
      data.height = false
      data.width = false
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of an object and a width of an object', () => {
      const data = new Rectangle()
      data.height = {}
      data.width = {}
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of an array and a width of an array', () => {
      const data = new Rectangle()
      data.height = []
      data.width = []
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

  describe('setWidth', () => {

    it('Should return 5 when is setted with a width of 5', () => {
      const data = new Rectangle()
      data.width = 5
      const result = data.width
      const expected = 5
      assert.equal(result, expected)
    })

    it('Should return 6.27 when is setted with a width of 6.27', () => {
      const data = new Rectangle()
      data.width = 6.27
      const result = data.width
      const expected = 6.27
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of -1', () => {
      const data = new Rectangle()
      data.width = -1
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width an character', () => {
      const data = new Rectangle()
      data.width = 'a'
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of a true value', () => {
      const data = new Rectangle()
      data.width = true
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of a false value', () => {
      const data = new Rectangle()
      data.width = false
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of an object', () => {
      const data = new Rectangle()
      data.width = {}
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of an array', () => {
      const data = new Rectangle()
      data.width = []
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

  })

  describe('setHeight', () => {

    it('Should return 5 when is setted with a height of 5', () => {
      const data = new Rectangle()
      data.height = 5
      const result = data.height
      const expected = 5
      assert.equal(result, expected)
    })

    it('Should return 6.27 when is setted with a height of 6.27', () => {
      const data = new Rectangle()
      data.height = 6.27
      const result = data.height
      const expected = 6.27
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of -1', () => {
      const data = new Rectangle()
      data.height = -1
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height an character', () => {
      const data = new Rectangle()
      data.height = 'a'
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of a true value', () => {
      const data = new Rectangle()
      data.height = true
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of a false value', () => {
      const data = new Rectangle()
      data.height = false
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of an object', () => {
      const data = new Rectangle()
      data.height = {}
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of an array', () => {
      const data = new Rectangle()
      data.height = []
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

  })
  
})