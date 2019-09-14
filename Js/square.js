// import Quad from './quad'
var Quad = require('./quad')

class Square extends Quad {

  constructor(side) {
    super(side, side)
    this._side = (side >= 0 && side != true)? side : 0
  }

  set side(value) {
    this._side = (value >= 0 && value != true)? value : 0
    super.width = this._side
    super.height = this._side
    // if(isNaN(value)) throw 'Side expects a number' Code Class 05
    // this._side = parseFloat(value)                 Code Class 05
  }

  get side() {
    return this._side
  }
  
}

module.exports = Square
// export default Square
