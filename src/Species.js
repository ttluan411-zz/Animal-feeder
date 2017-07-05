import React, { Component } from 'react';

export default function Species(props) {
    function handleClick(){
        props.action(props.name);
    }
    return (
        <div>
            <h5>{props.nane}</h5>
            <p>{props.status}</p>
            <button onClick={handleClick}>Feed</button>
        </div>
    )
}
// class Species extends Component {
    

//   handleClick(){
//     this.props.action(this.props.name);
//   }

//     render(){
//           console.log("rendering species");
//           console.log(this.props)
//         return (
//             <div>
//                 <h5>{this.props.name}</h5>
//                 <p>{this.props.status}</p>
//                 <button onClick={this.handleClick.bind(this)}>Feed</button>
//             </div>
//         )
//     }
// }

// export default Species


