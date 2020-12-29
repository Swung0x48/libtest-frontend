import React from "react"
import { Table } from "react-bootstrap"
import axios from "axios";
import AdminBookRow from "./AdminBookRow"

class AdminBookTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        let header = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }

        axios.get("http://localhost:8080/api/book/get", {headers: header})
            .then(response => {
                this.setState({books: response.data})
            })
            .catch(err => console.log(err))
    }

    render () {
        return (
            <Table striped bordered hover className={"table top-margin"}>
                <thead>
                <tr>
                    <th>图书 ID</th>
                    <th>书名</th>
                    <th>作者</th>
                    <th>出版社</th>
                    <th>定价</th>
                    <th>总数</th>
                    <th>借出数量</th>
                    <th>现有库存</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.books.map((e, index) =>
                        <AdminBookRow key={index} book={e}/>)
                }
                </tbody>
            </Table>
        )

    }
}

export default AdminBookTable