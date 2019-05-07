import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import './Name.css'




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
            descriptor:'',
            class:''
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

    clearField = (value) => {
      this.setState({
        [value]:''
      })
    }

    handleInput = (prop, value) => {
      console.log(prop,value)
      this.setState({
        [prop]:value
      })
    }


    
    render() {   
      console.log(this.state)  
        return (
            <> 
            <section className="NameBox">
              <h3> Class
                {this.state.class ? <div className="CharClass"><div>{this.state.class}</div>
                <button onClick={(e => {this.clearField (e.target.value)})} value="class">Clear</button></div> : null}
              </h3>

              <h3>First Name
                {this.state.firstName ? <div className="CharFirstName"><div>{this.state.firstName}</div>
                <button onClick={(e => {this.clearField (e.target.value)})} value="firstName">Clear</button></div> : null}
              </h3>

              <h3> Surname
                {this.state.lastName ? <div className="CharLastName"><div>{this.state.lastName}</div>
                <button onClick={(e => {this.clearField (e.target.value)})} value="lastName">Clear</button></div> : null}
              </h3>

             
                {this.state.descriptor ? <h3> Nickname<div className="CharDescriptor"><div>{"the " + this.state.descriptor}</div>
                <button onClick={(e => {this.clearField (e.target.value)})} value="descriptor">Clear</button></div></h3> : null} 
              

            </section> 
            <div className="CharCreateBox">
              <section className="RandomCharBox">
                <h2>Randomly Generate a Class and a Name!</h2>
                <div className="ButtonsBox">   
                  <button onClick={this.classMaker}>Get a Class</button>
                  <button onClick={(e => {this.handleButtons(e.target.value)})} value="firstName">First Name</button>
                  <button onClick={(e => {this.handleButtons(e.target.value)})} value="lastName">Last Name</button>
                  <button onClick={(e => {this.handleButtons(e.target.value)})} value="descriptor">Nickname</button>
                  <button onClick={this.reset}>Clear Form</button>
                </div>
              </section>
              <section className="UserCreateChar">
                <h2>Or enter your Character's Name</h2>
                <div className="CharInputs">
                  <div className="DropMenu"> DropMenu
                    <ul>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Barbarian" >Barbarian</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Bard" >Bard</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Cleric" >Cleric</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Druid" >Druid</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Fighter" >Fighter</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Monk" >Monk</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Paladin" >Paladin</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Ranger" >Ranger</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Rogue" >Rogue</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Sorcerer" >Sorcerer</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Warlock" >Warlock</option>
                      <option onClick={e => {this.handleInput("class", e.target.value)}} value="Wizard" >Wizard</option>
                   
                    </ul>
                  </div>
                  <input onChange={(e => {this.handleInput("firstName",e.target.value)})} value={this.firstName} placeholder='First Name'></input>
                  <input onChange={(e => {this.handleInput("lastName",e.target.value)})} value={this.lastName} placeholder='Last Name'></input>
                  <input onChange={(e => {this.handleInput("descriptor",e.target.value)})} value={this.descriptor} placeholder='Nickname'></input>
                </div>
              </section>
            </div>
                
            </>
    
        )
    }
}
export default withRouter(Name)