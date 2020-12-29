import React from "react"
import { Button, NavDropdown } from "react-bootstrap"
import {NavLink} from "react-router-dom"

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        window.location.href = "/"
    }

    render() {
        console.log(this.props)
        if (this.props.name !== undefined && this.props.name !== null) {
            return (
                <NavDropdown id="user" title={"Hi, " + this.props.name + "!"}>
                    <NavDropdown.Item
                    onClick={this.handleClick}>
                        退出登录
                    </NavDropdown.Item>
                </NavDropdown>
            )
        } else {
            return (
                    <Button variant="outline-primary" className={"mx-2"}>
                        <NavLink to="/login" className="button-link">
                            登录
                        </NavLink>
                    </Button>
            )
        }
    }
}

export default LoginButton