class Quad {

  static CalculatePerimeter(height, width) {
    if (isNaN(width) || (width == 0)) return 0
    if (isNaN(height) || (height == 0)) return 0 
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

  area() {
    return this._width * this._height
  }

  calculatePerimeter() {
    if (this._width == 0) return 0
    if (this._height == 0) return 0 
    else return (this._width * 2) + (this._height * 2)
  }

}

module.exports = Quad
// export default Quad
