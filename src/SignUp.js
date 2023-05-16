import { Link } from "react-router-dom"

export default function SignUp() {
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
                        <form class="row g-3">
                            <div class="col-md-12">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-12">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="0765070011" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Gender</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Sex"/>
                            </div>
                            <div class="col-md-12">
                                <label for="inputCity" class="form-label">Date of Birth</label>
                                <input type="date" class="form-control" id="inputCity" />
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