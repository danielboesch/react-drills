import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      array: ['eggs', 'milk', 'bread', 'ice cream', "cheese"],
    }
    
  }



  render(){
      let listItems = this.state.array.map((value, index) => {
        return <h2 key={index}>{value}</h2>
      })
      return  <div className='theDisplay'>{listItems}</div>
  
}

}

export default App;
