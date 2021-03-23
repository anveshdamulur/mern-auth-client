import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const registerUrl = 'https://mern-auth-application.herokuapp.com/api/auth';
export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            password : '',
            errMsg : '',
            successMsg :'' 
       }
    }

    handleChange=(event) =>{
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    validation =()=>{
        if(this.state.name === '' && this.state.email === '' && this.state.password === ''){
            alert('please fill the all fields');
            return false;
        }
        if(this.state.name.length < 6){
            alert('Name should be more than 6 letters');
            return false;
        }
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!this.state.email.match(mailformat))
        {
            alert("You have entered an invalid email address!");
            return false;
        }
        if(this.state.password.length < 6){
            alert('your password must be 6 charecters')
            return false;
        }
    }

    handleSubmit=()=>{
        
        this.validation();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        if(data.email !== '' && data.name !== "" && data.password !== ""){
            axios.post(`${registerUrl}/register`, data)
                .then(response => {
                    if(response ){
                        this.setState({
                            successMsg: response.data.message
                        })
                    }
                })
                .catch(err =>{
                    if (err.response) {
                        this.setState({
                            errMsg :err.response.data.error.message
                        })
                    }
                })
                this.setState({
                    successMsg : '',
                    errMsg :''
                })
               
            }
        
    }
    render() {
        return (
            <div className="container">
                <div class="panel panel-primary">
                    <div class="panel-heading text-center">
                        <span>Register</span>
                    </div>
                    <div class="panel-body">                           
                        <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" id="name" value={this.state.name} placeholder="Enter email" name="name" required onChange={this.handleChange}/>
                        </div>
                        <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" value={this.state.email} placeholder="Enter email" name="email" required onChange={this.handleChange}/>
                        </div>
                        <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="password" value={this.state.password} placeholder="Enter password" name="password" required onChange={this.handleChange}/>
                        </div>
                        <button class="btn btn-primary" onClick={this.handleSubmit}>SignUp</button>                           
                    </div>
                    <div>
                        <center>
                            <h2 style={{color:'#5cb85c'}}><strong>{this.state.successMsg}</strong></h2>
                        </center>
                    </div>
                    <div>
                        <center>
                            <h2 style={{color:'#d9534f'}}><strong>{this.state.errMsg}</strong></h2>
                        </center>
                    </div>  
                </div>
                <div>
                    <h3>Already Registered : <Link to='/login' style={{color:'#0275d8'}}>Login Here!</Link></h3>
                </div>
            </div>
        )
    }
}
