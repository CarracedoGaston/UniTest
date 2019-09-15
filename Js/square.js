// import Quad from './quad'
var Quad = require('./quad')

class Square extends Quad {

  constructor(side) {
    super(side, side)
    this._side = (side >= 0 && typeof(side) == ('number'))? side : 0
  }

  set side(value) {
    this._side = (value >= 0 && typeof(value) == ('number'))? value : 0
    super.width = this._side
    super.height = this._side
  }

  get side() {
    return this._side
  }
  
}

module.exports = Square
// export default Square
