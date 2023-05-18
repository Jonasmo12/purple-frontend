import * as React from "react";

export default class AuthenticationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onAuthenticate = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {username: username}
        )
    }
}