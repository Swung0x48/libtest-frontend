import React from "react"
import { Button, NavDropdown } from "react-bootstrap"
import {NavLink} from "react-router-dom"

function LoginButton(props) {
    console.log(props)
    if (props.name !== undefined && props.name !== null) {
        return (
            <NavDropdown id="user" title={"Hi, " + props.name + "!"}>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
        )
    } else {
        return (
                <Button variant="outline-primary" className={"mx-2"}>
                    <NavLink to="/login" className="login-button-link">
                        Login
                    </NavLink>
                </Button>
        )
    }
}

export default LoginButton