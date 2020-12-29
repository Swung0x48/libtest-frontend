import React from "react"
import {Button} from "react-bootstrap"
import axios from "axios"

class AdminUserRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // returnTime: this.props.order.returnTime,
            show: true,
            role: this.props.user.role,
            // banned: this.props.user.role === "banned"
        }

        this.onBan = this.onBan.bind(this)
        this.onUnban = this.onUnban.bind(this)
        this.onForceDelete = this.onForceDelete.bind(this)
    }

    onBan() {
        let header = {"Authorization": "Bearer " + localStorage.getItem("token")}
        axios.put("http://localhost:8080/api/user/ban/" + this.props.user.userId, {},{headers: header})
            .then(response => {
                this.setState(prevState => {
                    return {role: response.data.role}
                })
            })
            .catch(err => console.log(err))
    }

    onUnban() {
        let header = {"Authorization": "Bearer " + localStorage.getItem("token")}
        axios.put("http://localhost:8080/api/user/unban/" + this.props.user.userId, {headers: header})
            .then(response => this.setState({role: response.data.role}))
            .catch(err => console.log(err))
    }

    onForceDelete() {
        let header = {"Authorization": "Bearer " + localStorage.getItem("token")}
        axios.delete("http://localhost:8080/api/user/" + this.props.user.userId, {headers: header})
            .then(() => this.setState({show: false}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            this.state.show ?
                (<tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.user.userId}</td>
                    <td>{this.props.user.userName}</td>
                    <td>{this.state.role}</td>
                    <td>
                        {
                            this.state.role === "banned" ?
                                <Button variant="outline-success" onClick={this.onUnban}>解封用户</Button> :
                                <Button variant="outline-danger" onClick={this.onBan}>封禁用户</Button>
                        }
                        <Button variant="danger" onClick={this.onForceDelete}>删除用户</Button>
                    </td>
                </tr>) : null
        )
    }
}

export default AdminUserRow