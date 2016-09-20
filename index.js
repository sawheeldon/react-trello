var React = require('react');
var ReactDOM = require('react-dom');


// list container 

// var ListContainer = React.createClass({
    
// });



// card component
var Card = function(props) {
    return (
        <div className="card">{props.text}</div>
    );
};
//list component

var CardList = React.createClass({
    
     getInitialState: function() {
        return {
            clicked: false
        };
    },

        onAddSubmit: function(event) {
                event.preventDefault(event);
                console.log("button has been clicked");
            },
            onAddInputChanged: function (event) {
                console.log("user typed into box");  
            },
            
            // render: function (){
                //     var list = [];
                //     for (var i=0; i<3; i++) {
                //         list.push(<Card />);
                //     }
                    
                //     return (
                //         <div className="card-list">
                //             {list}
                //         </div>
                //         );
                     
                // }
    
    render: function(){
        return (
            <div>
                <div className="list">{this.props.listTitle}</div>
                <form>
                <input type="text" onChange={this.onAddInputChanged} placeholder="type here please"></input>
                <button className="btn btn-primary" onClick={this.onAddSubmit}>Submit</button>
                </form>
            </div>
        );
    }
});

//board component

var Boards = function() {
//     render: function (){
//       var board = [];
//       for (var i=0; i<3; i++) {
//             board.push(<CardList />);
//         }
//         return (
//             <div className="board">
//                 {board}
//             </div>
//             );
        
//   } 

        var listTitle = ["List 1", "List 2"];
        
        return (
            <div>
                <div className="board">Board 1</div>
            
            <div>
                <CardList listTitle="List 1" />
            </div>

            <div>
                <Card className="card" text="Card 1 Blah" />
                
                <Card className="card" text="Card 2 Blah" />
                
                <Card className="card" text="Card 3 Blah" />
            </div>
        </div>
        );
};



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Boards />, document.getElementById('card'));
});