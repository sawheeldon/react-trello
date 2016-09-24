var React = require('react');
var TestUtils = require('react-addons-test-utils');
// var should = require('chai').should();
var expect = require('chai').expect;
var ReactDOM = require('react-dom');

var index = require('../index.js');

describe('List component', function() {
  var listData = {
    title: "My test list",
    cards: [
      { data: 'dummy card 1' },
      { data: 'dummy card 2' },
      { data: 'dummy card 3' }
    ]
  };

  it('renders its title and cards', function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<index
        title={listData.title}
        cards={listData.cards}
        onAddInputChanged={function() {}}
        onAddClick={function() {}}
      />);
    var result = renderer.getRenderOutput();
    
    expect(result.props.children[0].props.children).to.equal(listData.title);
    expect(result.props.children[1].type).to.equal('ul');
    expect(result.props.children[1].props.children).to.have.lengthOf(listData.cards.length);
  });
});