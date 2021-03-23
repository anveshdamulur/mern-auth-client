import axios from 'axios';
import React, { Component } from 'react'
const url = "https://mern-auth-application.herokuapp.com/api/post";
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName :''
        }
    }

    handleSubmit=()=>{
        sessionStorage.removeItem('lkt');
        sessionStorage.removeItem('name');
        this.props.history.push('/login');
    }
    render() {
        if(sessionStorage.getItem('lkt') === null){
            alert('please login to enter your page')
            this.props.history.push('/login')
        }
        return (
            <div className="container">
                <div className="jumbotron d-flex">
                    <center>
                    <h2>Welcome to <strong>{this.state.userName}</strong></h2>
                    </center>
                    <button className="btn btn-danger" onClick={this.handleSubmit}>Logout</button>

                </div>
               
            </div>
        )
    }
    componentDidMount(){
        const token = sessionStorage.getItem('lkt')
       
        axios.get(url,{
            headers :{
                'auth-token' : token 
            }
        })
        .then(res => {
            const name = sessionStorage.getItem('name');
            this.setState({
                message : res.data.message,
                userName : name
            })
        })
    }
}
