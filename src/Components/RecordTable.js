import React from "react"
import { Table } from "react-bootstrap"

function RecordTable(props) {
    return (
        <Table striped bordered hover className={"table"}>
            <thead>
            <tr>
                <th>#</th>
                <th>借阅记录 ID</th>
                <th>借阅人 ID</th>
                <th>借阅人账号</th>
                <th>图书 ID</th>
                <th>书名</th>
                <th>借出时间</th>
                <th>归还时间</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </Table>
    )
}

export default RecordTable