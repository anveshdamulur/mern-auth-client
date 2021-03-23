import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link class="navbar-brand" to="/">ShoppingDev</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to="/home">Home</Link></li>
                        <li><Link to='/profile'>User</Link></li> 
                        <li><Link to='/getIp'>know your ip</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
