import React, { Component } from 'react';

class Species extends Component {
    

  handleClick(){
    this.props.action(this.props.name);
  }

    render(){
          console.log("rendering species");
          console.log(this.props)
        return (
            <div>
                <h5>{this.props.name}</h5>
                <p>{this.props.status}</p>
                <button onClick={this.handleClick.bind(this)}>Feed</button>
            </div>
        )
    }
}

export default Species