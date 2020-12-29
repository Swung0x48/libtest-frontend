import React from "react"
import {Button} from "react-bootstrap";
import axios from "axios"

class AdminOrderRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            returnTime: this.props.order.returnTime,
            show: true
        }

        this.onForceDelete = this.onForceDelete.bind(this)
        this.onForceReturn = this.onForceReturn.bind(this)
    }

    onForceReturn() {
        let header = {"Authorization": "Bearer " + localStorage.getItem("token")}
        axios.put("http://localhost:8080/api/order/return/" + this.props.order.orderID, {},{headers: header})
            .then(response => {
                this.setState(prevState => {
                    return {returnTime: response.data.returnTime}
                })
            })
            .catch(err => console.log(err))
    }

    onForceDelete() {
        this.onForceReturn()
        let header = {"Authorization": "Bearer " + localStorage.getItem("token")}
        axios.delete("http://localhost:8080/api/order/" + this.props.order.orderID, {headers: header})
            .then(() => this.setState({show: false}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            this.state.show ?
            (<tr>
                <td>{this.props.id}</td>
                <td>{this.props.order.orderID}</td>
                <td>{this.props.order.book.bookID}</td>
                <td>{this.props.order.book.bookName}</td>
                <td>{this.props.order.book.author}</td>
                <td>{this.props.order.book.publishing}</td>
                <td>{this.props.order.book.price}</td>
                <td>{this.props.order.lendTime}</td>
                <td>{this.state.returnTime}</td>
                <td>{this.state.returnTime ? "已归还" : "未归还"}</td>
                <td>
                    <Button variant="success" onClick={this.onForceReturn}  disabled={!!this.state.returnTime}>强制归还</Button>
                    <Button variant="danger" onClick={this.onForceDelete}>强制删除</Button>
                </td>
            </tr>) : null
        )
    }
}

export default AdminOrderRow