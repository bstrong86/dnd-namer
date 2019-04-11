import React, {Component} from 'react'
import axios from 'axios'

class Name extends Component {
    state= {
        firstName:'',
        lastName:'',
        descriptor:''
    }

    getFirstName = async () => {
            console.log('first name')
            let res = await axios.get('/first')
            const {first_name} = res.data[0]
            this.setState({
                firstName: first_name
            })            
        
    }

    getLastName = async () => {
        try{
            console.log('last name')
            let res = await axios.get('/last')
            const {last_name} = res.data[0]
            this.setState({
                lastName: last_name
            })
        } catch(err) {
            console.log(err)
        }
    }

    getDescriptor = async () => {
        let res = await axios.get('/descriptor')
        const {descriptor} = res.data[0]
        this.setState({
            descriptor: 'the ' + descriptor
        })
    }

    reset = () => {
        this.setState({
            firstName:'',
            lastName:'',
            descriptor:''
        })
    }

    render() {
        return (
            <>
                <div>{this.state.firstName}</div>
                <div>{this.state.lastName}</div>
                <div>{this.state.descriptor}</div>                
                <button onClick={this.getFirstName}>First Name</button>
                <button onClick={this.getLastName}>Last Name</button>
                <button onClick={this.getDescriptor}>Add Something</button>
                <button onClick={this.reset}>Clear Form</button>
                
            </>
        )
    }
}
export default Name