import React, { Component } from 'react'    
import axios from 'axios'
const lUrl = 'https://mern-auth-application.herokuapp.com/api/auth';
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email :'',
            password : '',
            errMsg:''
        }
    }

    handleChange=(e)=>{
        e.preventDefault();
        this.setState({
              [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const body = {
            email : this.state.email,
            password : this.state.password
        }
        axios.post(`${lUrl}/login`, body)
        .then(response =>{
          sessionStorage.setItem('lkt', response.data.token);
          sessionStorage.setItem('name', response.data.userName);
           this.props.history.push('/profile');
            }
        )
        .catch(err=>{
          if(err.response){
              this.setState({
                errMsg : err.response.data.error.message
              })
          }
        })       
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div class="panel-heading text-center">
                        <span>Login</span>
                    </div>
                    <div class="panel-body">                   
                        <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" name="email" class="form-control" id="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange} required/>
                        </div>
                        <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" name='password' class="form-control" id="password" value={this.state.password} placeholder="Enter password" onChange={this.handleChange} required/>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                    </div>
                    <div>
                        <center>
                            <h2 style={{color:'#d9534f'}}><strong>{this.state.errMsg}</strong></h2>
                        </center>
                    </div>  
                </div>
            </div>
        )
    }
}
