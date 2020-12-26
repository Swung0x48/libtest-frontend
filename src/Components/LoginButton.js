import React from "react"
import {Button, Container, NavDropdown} from "react-bootstrap"

function LoginButton(props) {
    console.log(props)
    if (props.name !== undefined) {
        return (
            <NavDropdown id="user" title={"Hi, " + props.name + "!"}>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
        )
    } else {
        return (
                <Button variant="outline-primary" className={"mx-2"}>Login</Button>
        )
    }
}

export default LoginButton