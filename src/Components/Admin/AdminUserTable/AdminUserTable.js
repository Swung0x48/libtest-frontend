import React from "react"
import { Table } from "react-bootstrap"
import axios from "axios"
import AdminUserRow from "./AdminUserRow";

class AdminUserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let header = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }

        axios.get("http://localhost:8080/api/user",  {headers: header})
            .then(response => {
                this.setState({users: response.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Table striped bordered hover className={"table top-margin"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>用户 ID</th>
                    <th>用户名</th>
                    <th>用户组</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.users
                        .map((e, index) =>
                            <AdminUserRow key={index} id={index + 1} user={e} />)
                }
                </tbody>
            </Table>
        )
    }
}

export default AdminUserTable