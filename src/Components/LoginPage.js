import React from "react"
import { Form, Button } from "react-bootstrap"
import {Login} from "../Services/Authentication";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.submitForm = this.submitForm.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    submitForm(e) {
        e.preventDefault()
        console.log(this.state.username)
        console.log(this.state.password)
        Login(this.state.username, this.state.password)
            .then(() => {
                window.location.href = "/"
            })
    }

    render() {
        return (
            <Form className={"top-margin login-page"} onSubmit={this.submitForm}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={this.handleUsernameChange} />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>)
    }
}

export default LoginPage