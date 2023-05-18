import { Link } from "react-router-dom";
import './SignIn.css';
import React, { useState } from "react"
import axios from "axios";

export default function SignIn() {
    const [patient, setPatient] = useState({
        username: "",
        password: "",
    });

    const {username, password } = patient
    const onInputChange = (e) => {
        setPatient({...patient, [e.target.name]: e.target.value});
    }
    

    const onAuthenticate = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/login", patient)
        .then((response) => {
            console.log(response.data)
            // this.setState(response.data)
        })
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pt-5 pb-5">
                        <h1>Sign In Form</h1>
                        <p>Dont have an account? sign up here <Link to='/signup'>here</Link></p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    <form onSubmit={(e) => onAuthenticate(e)}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                name="username"
                                value={username} 
                                onChange={(e) => onInputChange(e)}/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="exampleInputPassword1"
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)} />
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}