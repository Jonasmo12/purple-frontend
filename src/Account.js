import './Account.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Account = () => {
    
    const token = JSON.parse(localStorage.getItem("patient"))
    const getAuthConfig = () => ({
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    console.log(getAuthConfig())
    
    const [ patient, setPatient] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/patient", getAuthConfig())
        .then((response) => {
            console.log(response.data);

            setPatient(response.data)
        })
        .catch((err) => {
            console.log(err.message);
        });

    }, [])

    return (
        <>
            <div className="container" style={{ paddingTop: '100px'}}>
                <div className="row">
                    <div className="col-lg-12">
                        <p>ID: <span>{patient.patientID}</span></p> 
                        <p>Username: <span>{patient.username}</span> <a className='link' href=''>update</a></p>
                        <p>Phone: <span>{patient.phone}</span> <a className='link' href=''>update</a></p> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account 