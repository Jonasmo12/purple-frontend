import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';

function App() {
    return (
        <div>
            <div class="nav">
                <Nav />
            </div>

            <div class="container patient-home">
                <div class="row">
                    <h1>Patient Home</h1>
                </div>
            </div>

            <div class="footer">
                <Footer />
            </div>
      </div>
    );
}

export default App;
