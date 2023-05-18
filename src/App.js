import { BrowserRouter, Routes, Router, Link, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Patient from './Patient';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AuthenticationForm from './components/Authentication';
import * as React from "react";
import { request } from './components/axiosHelper';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onAuthenticate = (e, username, password) => {
        // e.preventDefault();
        request(
            "POST",
            "/login",
            {username: username, password: password}
        ).then((response) => {
            console.log(response)
            console.log(response.data)
            this.setState(response.data)
        })
    }

    onRegistration = (e, username, password, dob, gender) => {
        // e.preventDefault();
        request(
            "POST",
            "/registration",
            {username: username, password: password, dob: dob, gender: gender}
        ).then((response) => {
            console.log(response)
            console.log(response.data)
            this.setState(response.data)
        })
    }

    
    render() {
        return (
            <div>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            Purple
                        </a>
                    </div>
                </nav>
            

                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />}/>
                    
                </Routes>
            </div>
        )
    }
}


