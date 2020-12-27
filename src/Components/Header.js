import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import LoginButton from "./LoginButton"
import {Link, NavLink} from "react-router-dom"

class Header extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="header">
                <Navbar fixed="top" bg="light" expand="lg">
                    <Navbar.Brand href="#">Library Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><NavLink to="/" className={"link top"}>Home</NavLink></Nav.Link>
                            <NavDropdown title="Operations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item><Link to="/checkout"
                                                        className={"link"}>Checkout</Link></NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <LoginButton name={this.props.username}/>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header