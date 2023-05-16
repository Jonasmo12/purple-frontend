import { BrowserRouter, Routes, Router, Link, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Patient from './Patient';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {
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
    );
}

export default App;
