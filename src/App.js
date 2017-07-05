import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Species from './Species';

class App extends Component {


  constructor(props){
    super(props);
    
    this.state = {
      species: [
        {
          name:'Binturong (Bear Cat)',
          status: 'Hungry'
        },
        { 
          name: 'Antelope',
          status: 'Hungry'
        },
        { 
          name: 'Cat',
          status: 'Hungry'
        },
        { 
          name: 'Dog',
          status: 'Hungry'
        }
      ],
      newSpecies: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSpecies = this.addSpecies.bind(this);
    this.feedSpecies = this.feedSpecies.bind(this);
  }

  handleChange(event){
    this.setState({
      newSpecies: event.target.value
    });
  }
  
  addSpecies(){
    const newSpecies = {
      name:this.state.newSpecies,
      status: 'Hungry'
    };
    
    this.setState({
      species: [...this.state.species, newSpecies]
    });
  }

  feedSpecies(name){
    const species = this.state.species;
    for (let i= 0; i < species.length; i++){
      if(species[i].name === name) {
        species[i].status = 'Happy';
      }
    };
    this.setState({
      species: species
    });
  }

  render() {
    console.log("rendering app");
    console.log(this.state.species);
    

    const speciesArray = this.state.species.map((species, i) => {
      return <Species 
              key={i} 
              name={species.name} 
              status={species.status} 
              action={this.feedSpecies}
              />
    })

    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

         {speciesArray}
    
        <div>
          <input onChange={this.handleChange} value={this.state.newSpecies}/>
          <button onClick={this.addSpecies}>Add Species</button>
        </div>  

      </div>
    );
  }
}

export default App;
