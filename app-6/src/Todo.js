import React, {Component} from 'react'

class Todo extends Component {
render(){
    return(
        <div>
            {this.props.listItem}
        </div>
    )
}
}

export default Todo