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
                            <Nav.Link><NavLink to="/" className={"link top"}>主页</NavLink></Nav.Link>
                            <NavDropdown title="操作" id="basic-nav-dropdown">
                                {
                                    this.props.username ?
                                    (<NavDropdown.Item>
                                        <Link to="/checkout" className={"link"}>
                                            查看已借图书
                                        </Link>
                                    </NavDropdown.Item>) : null
                                }
                                <NavDropdown.Divider/>
                                {
                                    this.props.role === "ADMIN" ?
                                    (<NavDropdown.Item>
                                        <Link to="/admin/books" className={"link"}>
                                            管理所有图书
                                        </Link>
                                    </NavDropdown.Item>) : null
                                }
                                {
                                    this.props.role === "ADMIN" ?
                                    (<NavDropdown.Item>
                                        <Link to="/admin/orders" className={"link"}>
                                            管理借阅记录
                                        </Link>
                                    </NavDropdown.Item>) : null
                                }
                                {
                                    this.props.role === "ADMIN" ?
                                    (<NavDropdown.Item>
                                        <Link to="/admin/users" className={"link"}>
                                            管理用户
                                        </Link>
                                    </NavDropdown.Item>) : null
                                }
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