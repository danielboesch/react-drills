import React, {Component} from 'react'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            pass: '',
        }
    }


    handleClick(name, pass){
        alert(`Username: ${name} Password:  ${pass}`)
    }
    handleChange1(val){
        this.setState({name: val})
    }
    handleChange2(val){
        this.setState({pass: val})
    }


    
render(){
    return(
        <div>
            <input onChange={(e) => this.handleChange1(e.target.value)}></input>
            <input onChange={(e) => this.handleChange2(e.target.value)}></input>
            <button onClick={(e) => this.handleClick(this.state.name, this.state.pass)}>Login</button>
        </div>
    )
}
}

export default Login