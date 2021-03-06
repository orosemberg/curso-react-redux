import React, {Component} from 'react'

export default class ClassComponent extends Component {
    
    constructor (props) {
        super(props)
        this.state = {value: props.initialValue}
    }

    sum(delta) {
        this.setState({...this.state, value: this.state.value + delta})
    }
   
    render() {
        return (
            <div>
                <h1> {this.props.label} </h1>
                <h1> {this.state.value} </h1>
                <button onClick={() => this.sum(1)}> sum </button>
                <button onClick={() => this.sum(-1)}> sub </button>
            </div>

        )
    }
}