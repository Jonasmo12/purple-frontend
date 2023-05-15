import { useState, useEffect } from 'react';
import './Patient.css';

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

    }, [])
    const emergencies = patient.emergencies

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 personal-information'>
                
                    <h4>Basic information</h4>
                    <b>Patient ID: </b> {patient.patientID} <br></br>
                    <b>Username: </b> {patient.username} <br></br>
                    <b>Phone: </b> {patient.phone} <br></br>
                    <b>Age:</b> {patient.age} <br></br>
                    <b>Date of Birth: </b> {patient.dob} <br></br>
                    <b>Gender: </b> {patient.gender} <br></br>

                    
                </div>
                <div className='col-lg-12 medical-information'>
                    <h4 className='pb-2'>Emergency Contacts</h4>
                        
                        {emergencies.map(({id, firstName, lastName, relationship, phone, fullName}) =>
                           
                            <div className='emergency-contact'>
                                <b>{fullName}</b> <a className='emergency-edit-button' href=''>edit</a> 
                                <p className='fw-lighter'>{relationship}</p>
                                <p>{phone}</p>
                            </div>
                            
                        )}
                    
        
                </div>

                <div className='col-lg-12'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Allergies
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Medications
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Diagnoses
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    </div>
                </div>
            
                
            </div>
        </div>        
    );
}

export default Patient;