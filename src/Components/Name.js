import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Name extends Component {
    state= {
        firstName:'',
        lastName:'',
        descriptor:'',
        class: ''
    }


    

    reset = () => {
        this.setState({
            firstName:'',
            lastName:'',
            descriptor:''
        })
    }

    
    classMaker  = async () => {
        let res = await axios.get('/class')
        this.setState({
            class: res.data
        })
    }
    
    handleButtons = async (value) => {
        console.log(111, value)
        let res = await axios.get(`/${value}`)
        console.log(res.data)
        this.setState({
            [value]: res.data
        })
    }
    
    render() {     
        console.log(this.props.match)
        console.log(this.state)
        return (
            <>
                <div>{this.state.class}</div>
                <div>{this.state.firstName}</div>
                <div>{this.state.lastName}</div>
                <div>{"the" + this.state.descriptor}</div>      
                <button onClick={this.classMaker}>Get a Class</button>
                <button onClick={(e => {this.handleButtons(e.target.value)})} value="firstName">First Name</button>
                <button onClick={(e => {this.handleButtons(e.target.value)})} value="lastName">Last Name</button>
                <button onClick={(e => {this.handleButtons(e.target.value)})} value="descriptor">Add Something</button>
                <button onClick={this.reset}>Clear Form</button>
                
            </>
    
        )
    }
}
export default withRouter(Name)