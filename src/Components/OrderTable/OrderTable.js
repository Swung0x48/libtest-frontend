import React from "react"
import { Table } from "react-bootstrap"
import axios from "axios"
import OrderRow from "./OrderRow";

class OrderTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        let header = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }

        axios.get("http://localhost:8080/api/order/my", {headers: header})
            .then(response => {
                this.setState({records: response.data})
            })
    }

    render() {
        return (
            <Table striped bordered hover className={"table top-margin"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>借阅记录 ID</th>
                    <th>图书 ID</th>
                    <th>书名</th>
                    <th>作者</th>
                    <th>借出时间</th>
                    <th>归还时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.records
                        .map((e, index) =>
                            <OrderRow key={index} id={index + 1} records={e} />)
                }
                </tbody>
            </Table>
        )
    }
}

export default OrderTable