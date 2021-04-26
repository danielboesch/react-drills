import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString: "",
      foods: ['sushi', 'bread', 'tomato', 'salad', 'cucumber', "tortilla", 'sourdough', 'bbq'],

    }
  }

  handleChange(val) {
    this.setState({filterString: val})
  }

  render(){
    let listItems = this.state.foods
    .filter((value, index) => {
      return value.includes(this.state.filterString)
    }) 
    .map((value, index) => {
      return <h2 key={index}>{value}</h2>
    })
    return(
      <div>
      <input className='textBoxClass' onChange={(e) => this.handleChange(e.target.value)}></input>
       {listItems}
      </div>

    )
  }

}


export default App;
