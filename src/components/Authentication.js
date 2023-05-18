import * as React from "react";


export default class AuthenticationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "authentication",
            username: "",
            password: "",
            gender: "",
            dob: "",
            onAuthentication: props.onAuthentication,
            onRegistration: props.onRegistration
        };
    }

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };

    onSubmitAuthentication = (e) => {
        this.state.onAuthentication(e, this.state.username, this.state.password);
    };

    onSubmitRegistration = (e) => {
        this.state.onRegistration(
            e,
            this.state.username,
            this.state.password,
            this.state.gender,
            this.state.dob
        );
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        
                        <h1>Authentication page</h1>
                    </div>
                </div>
            </div>
        )
    }
}