import React from "react"
import { Form, Button } from "react-bootstrap"
import {Login} from "../Services/Authentication"

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
        this.setState({username: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    submitForm(e) {
        e.preventDefault()
        console.log(this.state.username)
        console.log(this.state.password)
        Login(this.state.username, this.state.password)
            .then(() => {
                // this.props.history.push("/")
                window.location.href = "/"
            })
            .catch(err => {
                alert("用户名或密码错误，或该账号已被封禁")
                console.log(err)
            })
    }

    render() {
        return (
            <Form className={"top-margin login-page"} onSubmit={this.submitForm}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>用户名</Form.Label>
                    <Form.Control type="text" placeholder="输入你的用户名..." onChange={this.handleUsernameChange} />
                    <Form.Text className="text-muted">
                        使用注册时的用户名登录
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>密码</Form.Label>
                    <Form.Control type="password" placeholder="输入你的密码..." onChange={this.handlePasswordChange} />
                </Form.Group>
                {/*<Form.Group controlId="formBasicCheckbox">*/}
                {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                {/*</Form.Group>*/}
                <Button variant="primary" type="submit">
                    登录
                </Button>
            </Form>)
    }
}

export default LoginPage