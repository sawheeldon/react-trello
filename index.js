var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function() {
        return <div>This is my card</div>;
        
    }
    
});

var CardList = React.createClass({
    render: function (){
        var list = [];
        for (var i=0; i<3; i++) {
            list.push(<Card />);
        }
        
        return (
            <div className="card-list">
                {list}
            </div>
            );
         
    }
});

var Boards = React.createClass({
   render: function (){
       var board = [];
       for (var i=0; i<3; i++) {
            board.push(<CardList />);
        }
        return (
            <div className="board">
                {board}
            </div>
            );
        
   } 
    
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Boards />, document.getElementById('card'));
});