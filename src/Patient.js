import { useState, useEffect } from 'react';
import './Patient.css';
import axios from 'axios';

const Patient = () => {
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
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 personal-information'>
                    <h4>Basic information</h4>
                    <p className='basic-information-p'>Age: <span className='basic-span'>{patient.age}</span> </p> 
                    <p className='basic-information-p'>Date of Birth: <span className='basic-span'>{patient.dob}</span></p>  
                    <p className='basic-information-p'>Gender: <span className='basic-span'>{patient.gender}</span></p> 
                </div>
                <div className='col-lg-12 emergencies-container'>
                    <h4 className='pb-2'>Emergency Contacts</h4>
                        {patient.emergencies ? patient.emergencies.map(emergency => {
                            return (
                                <div className='emergency-contact' key={emergency.id}>
                                <b>{emergency.fullName}</b> <a className='emergency-edit-button' href='#'>edit</a> 
                                <p className='fw-lighter'>{emergency.relationship}</p>
                                <p>{emergency.phone}</p>
                                <hr/>
                            </div>
                            )
                        }
                        ): null}
                    
        
                </div>

                <div className='col-lg-12'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Allergies
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {patient.allergies ? patient.allergies.map(allergy => {
                                return (
                                    <div className='emergency-contact' key={allergy.id}>
                                    <b>{allergy.name}</b>
                                    <p className='fw-lighter'>{allergy.diagnosedDate}</p>
                                    <p><b>Created Date: </b>{allergy.createdDate}</p>
                                    
                                    <hr/>

                                </div>
                                )
                            }
                            
                                
                                
                            ): null}
                        </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Medications
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div> */}
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Diagnoses
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div> */}
                    </div>
                </div>
            
                
            </div>
        </div>        
    );
}

export default Patient;