import React from 'react'
import Header from './Header'
import {BrowserRouter , Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Footer from './Footer'
import Profile from './Profile'
import Home from './Home'
import FindIp from './FindIp'
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile} />
                <Route path='/home' component={Home}/>
                <Route path='/getIp' component={FindIp}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Router
