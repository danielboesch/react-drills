import React, { Component } from 'react';
import './App.css';
import Todo from "./Todo";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listArr: [],
      newTask: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

    handleChange(value) {
      this.setState({newTask: value})
    }

    handleClick() {
      this.setState({
        listArr: [...this.state.listArr, this.state.newTask],
        newTask: ''
        
      });
    }

  
    render(){
      let list = this.state.listArr.map((element, index) => {
        return <Todo key={index} listItem={element} />
      })

      return (
      <div className="App">
      <input
      value={this.state.input}
      placeholder='Enter New Task'
      onChange={(e) => this.handleChange(e.target.value)}></input>

      <button
      onClick={()=> this.handleClick()}
      >Add</button>

      {list}

    </div>
  );
}
  
}

export default App;
