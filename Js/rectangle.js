// import Quad from './quad'
var Quad = require("./quad");

class Rectangle extends Quad {

  constructor(height, width) {
    super(height, width);
    this._height = (height >= 0 && height != true)? height : 0
    this._width = (width >= 0 && width != true)? width : 0  
  }
  
  set height(value) {
    this._height = (value >= 0 && value != true)? value : 0
    super.height = this._height
  }

  get height() {
    return this._height
  }

  set width(value) {
    this._width = (value >= 0 && value != true)? value : 0
    super.width = this._width
  }

  get width() {
    return this._width
  }

}

module.exports = Rectangle;
// export default Rectangle
