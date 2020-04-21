var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });


  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 9);
  })

  it('it should subtract', function(){
    calculator.numberClick(9)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 7);
  })

  it('it should multiply', function(){
    calculator.numberClick(8)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 32);
  })

  it ('it should divide', function(){
    calculator.numberClick(14)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 2);
  })

  it('it should cancatenate multiple clicks', function (){
    calculator.numberClick(3)
    calculator.numberClick(5)
    calculator.numberClick(8)
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 240);
  })

it('can chain multiple operations', function(){
  calculator.numberClick(7)
  calculator.operatorClick('+')
  calculator.numberClick(7)
  calculator.operatorClick('-')
  calculator.numberClick(7)
  calculator.operatorClick('=')
  assert.equal(calculator.previousTotal, 7);
})


it('clear running total', function(){
  calculator.numberClick(8)
  calculator.operatorClick('+')
  calculator.numberClick(3)
  calculator.operatorClick('-')
  calculator.numberClick(2)
  calculator.operatorClick('=')
  calculator.clearClick()
  assert.equal(calculator.previousTotal, 9);
  assert.equal(calculator.runningTotal, 0);

})
});
