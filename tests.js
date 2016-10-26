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
//FIX^^^^

describe('md.hasClass()', function(){
  it('should add a CSS class', function() {
    expect(md.hasClass('div','container-fluid')).to.be.true
  })
})
describe('md.getAttr()', function(){
  it('should get a CSS class attribute', function() {
    expect(md.getAttr('button', 'data-toggle')).to.contain('collapse')
  })
})
describe('md.setAttr()', function(){
  it('should set a CSS class attribute', function() {
    (md.setAttr('input','placeholder', 'Found it!'))
    expect(md.getAttr('input','placeholder')).to.contain('Found it!')
  })
})
describe('md.setHTML()', function(){
  it('should set an HTML element', function() {
    (md.setHTML('h4', 'Winter Wonderland'))
    expect(md.getHTML('h4')).to.contain('Winter Wonderland')
  })
})
describe('md.getHTML()', function(){
  it('should get an HTML element', function() {
    expect(md.getHTML('.page-header')).to.contain('Dashboard')
  })
})
describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        (md.flipPage('body'))
        expect(document.body.style.transform).to.equal('rotate(180deg)')
    })
})
