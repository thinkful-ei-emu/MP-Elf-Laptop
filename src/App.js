import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import OptionList from './components/OptionList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Mind mild breeze 2000',
            cost: 1345
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    //feature is the key 
    //newValue is the object  
    //setting the specific object to the newValue   
    selected[feature] = newValue;
    //updating the state
    this.setState({
      selected
    });
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <OptionList 
        features={this.props.features}
        selected={this.state.selected}
        updateFeature = {this.updateFeature}
        />
      </div>
    );
  }
}

export default App;  
