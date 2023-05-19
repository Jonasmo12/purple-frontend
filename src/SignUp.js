import { Link } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios";

export default function SignUp() {

    const [patient, setPatient] = useState({
        username: "",
        password: "",
        phone: "",
        gender: "",
        dob: "",
    });

    const {username, password, phone, gender, dob} = patient
    const onInputChange = (e) => {
        setPatient({...patient, [e.target.name]: e.target.value});
    }
    

    const onRegistration = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/registration", patient)
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
                        <h1>Sign Up Page</h1>
                        <p>Already have an account? sign in here <Link to='/'>here</Link></p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    
                    </div>

                    <div className="col-lg-4">
                        <form className="row g-3" onSubmit={(e) => onRegistration(e)}>
                            <div className="col-md-12">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input 
                                    type={"email"}
                                    className="form-control" 
                                    id="inputEmail4" 
                                    value={username}
                                    name="username"
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className="col-md-12">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input 
                                    type={"password"}
                                    className="form-control" 
                                    id="inputPassword4" 
                                    name="password"
                                    value={password}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Phone</label>
                                <input  
                                    type={"text"}
                                    class="form-control" 
                                    id="inputAddress" 
                                    placeholder="0765070011" 
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => onInputChange(e)}/>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Gender</label>
                                <input 
                                    type={"text"}
                                    class="form-control" 
                                    id="inputAddress2" 
                                    placeholder="Sex"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => onInputChange(e)}/>
                            </div>
                            <div class="col-md-12">
                                <label for="inputCity" class="form-label">Date of Birth</label>
                                <input 
                                    type={"date"}
                                    class="form-control" 
                                    id="inputCity" 
                                    name="dob"
                                    value={dob}
                                    onChange={(e) => onInputChange(e)}/>
                            </div>
                            
                            
                            
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}