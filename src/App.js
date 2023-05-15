import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';

const Patient = () => {
    const [ patient, setPatient] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/patient/1")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPatient(data)
        })
        .catch((err) => {
            console.log(err.message);
        });

    })

    return (
        <div>
            <h1>Basic information</h1>
            <b>Patient ID: </b> {patient.patientID} <br></br>
            <b>Username: </b> {patient.username} <br></br>
            <b>Phone: </b> {patient.phone} <br></br>
            <b>Age:</b> {patient.age} <br></br>
            <b>Date of Birth: </b> {patient.dob} <br></br>
            <b>Gender: </b> {patient.gender} <br></br>

            <h1>Emergency Contacts</h1>
            <h1>Allergies</h1>
            <h1>Medications</h1>
            <h1>Diagnoses</h1>

        </div>
        
    );
}

function App() {
    return (
        <div>
            <div class="nav">
                <Nav />
            </div>

            <div class="container patient-home">
                <div class="row">
                    <Patient />
                </div>
            </div>

            <div class="footer">
                <Footer />
            </div>
      </div>
    );
}

export default App;
