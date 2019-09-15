// import Quad from './quad'
var Quad = require("./quad");

class Rectangle extends Quad {

  constructor(height, width) {
    super(height, width)
    this._height = (height >= 0 && typeof(height) == ('number'))? height : 0
    this._width = (width >= 0 && typeof(width) == ('number'))? width : 0  
  }
  
  set height(value) {
    this._height = (value >= 0 && typeof(value) == 'number')? value : 0
    super.height = this._height
  }

  get height() {
    return this._height
  }

  set width(value) {
    this._width = (value >= 0 && typeof(value) == 'number')? value : 0
    super.width = this._width
  }

  get width() {
    return this._width
  }

}

module.exports = Rectangle;
// export default Rectangle
