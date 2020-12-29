import React from "react"
import {Button} from "react-bootstrap"
import axios from "axios";

class AdminUserRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            returnTime: this.props.records.returnTime
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let header = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }

        console.log(this.props.records.orderID)
        axios.put("http://localhost:8080/api/order/return/" + this.props.records.orderID, {}, {headers: header})
            .then(responese => {
                console.log(responese.data)
                console.log(responese.data.returnTime)
                this.setState(prevState => {
                    return {returnTime: responese.data.returnTime}
                })
            })
            .catch(err => console.log(err))
    }

    // componentWillMount() {
    //     this.setState({returnTime: this.props.records.returnTime})
    // }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.records.orderID}</td>
                <td>{this.props.records.book.bookID}</td>
                <td>{this.props.records.book.bookName}</td>
                <td>{this.props.records.lendTime}</td>
                <td>{this.state.returnTime || null}</td>
                <td>{this.state.returnTime ? "已归还" : "未归还"}</td>
                <td><Button variant="success" onClick={this.handleClick} disabled={!!this.state.returnTime}>归还</Button></td>
            </tr>
        )
    }
}

export default AdminUserRow

