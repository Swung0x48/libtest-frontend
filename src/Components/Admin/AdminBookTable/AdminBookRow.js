import React from "react"
import {Button} from "react-bootstrap";

class AdminBookRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.book.bookID}</td>
                <td>{this.props.book.bookName}</td>
                <td>{this.props.book.author}</td>
                <td>{this.props.book.publishing}</td>
                <td>{this.props.book.price}</td>
                <td>{this.props.book.totalCount}</td>
                <td>{this.props.book.lendCount}</td>
                <td>{this.props.book.nowCount}</td>
                <td>
                    {/*<Button variant="success">归还</Button>*/}
                    <Button variant="danger">下架</Button>
                </td>
            </tr>
        )
    }
}

export default AdminBookRow