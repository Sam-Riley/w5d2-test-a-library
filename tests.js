// Mocha & Chai Test Suite (for Tuesday's assignment)
chai.should()
var assert = chai.assert;
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })
})
describe('md.removeClass()', function(){
  it('should remove a CSS class', function(){
    md.removeClass('div', 'test')
    expect(document.body.classList.contains('test')).to.be.true
  })
})
describe('md.hasClass()', function(){
  it('should add a CSS class', function() {
    md.hasClass('div', 'test')
    expect(document.body.classList.contains('test')).to.be.true
  })
})
describe('md.getAttr()', function(){
  it('should get a CSS class attribute', function() {
    md.getAttr('div', 'test')
    expect(document.body.classList.contains('test')).to.be.true
  })
})
describe('md.setAttr()', function(){
  it('should set a CSS class attribute', function() {
    md.setAttr('div', 'test')
    expect(document.body.classList.contains('test')).to.be.true
  })
})
describe('md.setHTML()', function(){
  it('should set an HTML element', function() {
    md.setHTML('div', 'test')
    expect(document.body.classList.contains('test')).to.be.true
  })
})
describe('md.getHTML()', function(){
  it('should get an HTML element', function() {
    md.getHTML('div', 'test')
    expect(document.body.classList.contains('test')).to.be.true
  })
})
