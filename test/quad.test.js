const assert = require('assert')
const Quad = require('../Js/quad')

describe('Quad', () => {

  describe('getWidth && getHeight', () => {

    it('Should return 0 && 0 when created without width and height', () => {
      const data = new Quad()
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with an undefined width height', () => {
      const data = new Quad(undefined, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

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

    it('Should return 0 && 0 when created with a undefined height and a width of a true value', () => {
      const data = new Quad(undefined, true)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when created with a undefined height and a width of a false value', () => {
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
  
    it('Should return 0 && 0 when created with a height of a true value and a undefined width', () => {
      const data = new Quad(true, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })
  
    it('Should return 0 && 0 when created with a height of false value and a undefined width', () => {
      const data = new Quad(false, undefined)
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

  describe('setWidth && setHeight', () => {

    it('Should return 0 && 0 when is setted with a undefined height and width', () => {
      const data = new Quad()
      data.height = undefined
      data.width = undefined
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 5 && 5 when is setted with a height of 5 and a width of 5', () => {
      const data = new Quad()
      data.height = 5
      data.width = 5
      const result = [data.height, data.width]
      const expected = [5, 5]
      assert.deepEqual(result, expected)
    })

    it('Should return 6.27 && 6.27 when is setted with a height of 6.27 and a width of 6.27', () => {
      const data = new Quad()
      data.height = 6.27
      data.width = 6.27
      const result = [data.height, data.width]
      const expected = [6.27, 6.27]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of -1 and a width of -1', () => {
      const data = new Quad()
      data.height = -1
      data.width = -1
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of "a" and a width of "a"', () => {
      const data = new Quad()
      data.height = 'a'
      data.width = 'a'
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of a true value and a width of a true value', () => {
      const data = new Quad()
      data.height = true
      data.width = true
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of a false value and a width of a false value', () => {
      const data = new Quad()
      data.height = false
      data.width = false
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of an object and a width of an object', () => {
      const data = new Quad()
      data.height = {}
      data.width = {}
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

    it('Should return 0 && 0 when is setted with a height of an array and a width of an array', () => {
      const data = new Quad()
      data.height = []
      data.width = []
      const result = [data.height, data.width]
      const expected = [0, 0]
      assert.deepEqual(result, expected)
    })

  })

  describe('setWidth', () => {

    it('Should return 5 when is setted with a width of 5', () => {
      const data = new Quad()
      data.width = 5
      const result = data.width
      const expected = 5
      assert.equal(result, expected)
    })

    it('Should return 6.27 when is setted with a width of 6.27', () => {
      const data = new Quad()
      data.width = 6.27
      const result = data.width
      const expected = 6.27
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of -1', () => {
      const data = new Quad()
      data.width = -1
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width an character', () => {
      const data = new Quad()
      data.width = 'a'
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of a true value', () => {
      const data = new Quad()
      data.width = true
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of a false value', () => {
      const data = new Quad()
      data.width = false
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of an object', () => {
      const data = new Quad()
      data.width = {}
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a width of an array', () => {
      const data = new Quad()
      data.width = []
      const result = data.width
      const expected = 0
      assert.equal(result, expected)
    })

  })

  describe('setHeight', () => {

    it('Should return 5 when is setted with a height of 5', () => {
      const data = new Quad()
      data.height = 5
      const result = data.height
      const expected = 5
      assert.equal(result, expected)
    })

    it('Should return 6.27 when is setted with a height of 6.27', () => {
      const data = new Quad()
      data.height = 6.27
      const result = data.height
      const expected = 6.27
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of -1', () => {
      const data = new Quad()
      data.height = -1
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height an character', () => {
      const data = new Quad()
      data.height = 'a'
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of a true value', () => {
      const data = new Quad()
      data.height = true
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of a false value', () => {
      const data = new Quad()
      data.height = false
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of an object', () => {
      const data = new Quad()
      data.height = {}
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is setted with a height of an array', () => {
      const data = new Quad()
      data.height = []
      const result = data.height
      const expected = 0
      assert.equal(result, expected)
    })

  })

  describe('Area', () => {

    it('Should return 25 when is created with a height and witdh of 5', () => {
      const data = new Quad(5, 5)
      const result = data.area()
      const expected = 25
      assert.equal(result, expected)
    })

    it('Should return 12.5 when is created with a height of 2.5 and witdh of 5', () => {
      const data = new Quad(2.5, 5)
      const result = data.area()
      const expected = 12.5
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of 0', () => {
      const data = new Quad(5, 0)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of undefined', () => {
      const data = new Quad(5, undefined)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of undefined and witdh of 5', () => {
      const data = new Quad(undefined, 5)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 0 and witdh of 5', () => {
      const data = new Quad(0, 5)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of undefined and witdh of undefined', () => {
      const data = new Quad(undefined, undefined)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of a character', () => {
      const data = new Quad(5, 'a')
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of "a" and witdh of undefined', () => {
      const data = new Quad('a', undefined)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of an object and witdh of an array', () => {
      const data = new Quad({}, [])
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of an object and witdh of an true value', () => {
      const data = new Quad({}, undefined)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of true value and witdh of false value', () => {
      const data = new Quad(true, false)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of undefined', () => {
      const data = new Quad(5, undefined)
      const result = data.area()
      const expected = 0
      assert.equal(result, expected)
    })

  })

  describe('Perimeter', () => {

    it('Should return 20 when is created with a height and witdh of 5', () => {
      const data = new Quad(5, 5)
      const result = data.calculatePerimeter()
      const expected = 20
      assert.equal(result, expected)
    })

    it('Should return 15 when is created with a height of 2.5 and witdh of 5', () => {
      const data = new Quad(2.5, 5)
      const result = data.calculatePerimeter()
      const expected = 15
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of 0', () => {
      const data = new Quad(5, 0)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of undefined', () => {
      const data = new Quad(5, undefined)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of undefined and witdh of 5', () => {
      const data = new Quad(undefined, 5)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 0 and witdh of 5', () => {
      const data = new Quad(0, 5)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of undefined and witdh of undefined', () => {
      const data = new Quad(undefined, undefined)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of a character', () => {
      const data = new Quad(5, 'a')
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of "a" and witdh of undefined', () => {
      const data = new Quad('a', undefined)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of an object and witdh of an array', () => {
      const data = new Quad({}, [])
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of an object and witdh of an true value', () => {
      const data = new Quad({}, undefined)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of true value and witdh of false value', () => {
      const data = new Quad(true, false)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of undefined', () => {
      const data = new Quad(5, undefined)
      const result = data.calculatePerimeter()
      const expected = 0
      assert.equal(result, expected)
    })
    
  })

  describe('Static Method CalculatePerimeter', () =>{

    it('Should return 0 when is created with a height of 0 and with of 5', () => {
      const data = [0, 5]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 20 when is created with a height and witdh of 5', () => {
      const data = [5, 5]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 20
      assert.equal(result, expected)
    })

    it('Should return 15 when is created with a height of 2.5 and witdh of 5', () => {
      const data = [2.5, 5]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 15
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of undefined and witdh of 5', () => {
      const data = [undefined, 5]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of undefined and witdh of undefined', () => {
      const data = [undefined, undefined]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of 5 and witdh of a character', () => {
      const data = [5, 'a']
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of "a" and witdh of undefined', () => {
      const data = ['a', undefined]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of an object and witdh of an array', () => {
      const data = [{}, []]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of an object and witdh of an true value', () => {
      const data = [{}, undefined]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })

    it('Should return 0 when is created with a height of true value and witdh of false value', () => {
      const data = [true, false]
      const result = Quad.CalculatePerimeter(...data)
      const expected = 0
      assert.equal(result, expected)
    })
    
  })

})