import axios from 'axios';
import React, { Component } from 'react';

const url = "https://mern-auth-application.herokuapp.com/api/post/getIpAdd";

export default class FindIp extends Component {
    constructor(props){
        super(props);
        this.state= {
            data :''
        }
    }
    render() {
        if(sessionStorage.getItem('lkt') === null){
            alert('please login to know your ip address');
             this.props.history.push('/login');
        }
        return (
            <div>
                <h1>country : {this.state.data.country}</h1>
                <h2>continent : {this.state.data.continent}</h2>
                <p>Ip Address : {this.state.data.ip_address}</p>      
            </div>
        )
    }
    componentDidMount(){
        const token = sessionStorage.getItem('lkt');
        axios.get(url,  {
            headers : {
                "auth-token" : token
            }
       })
        .then(response=> {
            this.setState({
                data : response.data.result
            })
        })
    }
}
