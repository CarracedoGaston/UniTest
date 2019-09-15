class Quad {

  static CalculatePerimeter(height, width) {
    return (width * 2) + (height * 2)
  }

  constructor(height, width) {
    this._height = (height >= 0 && typeof(height) == ('number'))? height : 0
    this._width = (width >= 0 && typeof(width) == ('number'))? width : 0  
  }

  set height(value) {
    this._height = (value >= 0 && typeof(value) == 'number')? value : 0
  }

  get height() {
    return this._height
  }

  set width(value) {
    this._width = (value >= 0 && typeof(value) == 'number')? value : 0
  }

  get width() {
    return this._width
  }

  get area() {
    return this._width * this._height
  }

  calculatePerimeter() {
    return (this._width * 2) + (this._height * 2)
  }

}

module.exports = Quad
// export default Quad
