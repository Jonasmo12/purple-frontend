import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Patient from './Patient';

function App() {
    return (
        <div>
           
                <Nav />
            

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
