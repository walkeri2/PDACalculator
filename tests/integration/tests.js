const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });


  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  });

  it('should update the display of the running total', function(){
    let running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('11')
    });

  it('should have arthmetical operations that update the display with result of the operation', function () {
    let running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('24')
});




  it('should chain multiple operations together', function () {
    let running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  });



  it('should output as expected for a range of numbers', function () {
    let running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3885')
  });

  it('should output as expected for a range of numbers decimal', function () {
    let running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.25')
  });

    it('should output as expected for a range of numbers negative', function () {
      let running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number8')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-3')
    });

    it('should output as expected for a range of numbers positive', function () {
      let running_total = element(by.css('#running_total'))
      element(by.css('#operator_subtract')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('2')
    });


  it('what does the code do in exceptional circumstances', function () {
    let running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  });

});
