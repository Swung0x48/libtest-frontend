import React from "react"
import {Button} from "react-bootstrap";
import axios from "axios";

class AdminBookRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inStock: this.props.book.nowCount > 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("http://localhost:8080/api/book/" + (this.state.inStock ? "" : "un") + "ban/" + this.props.book.bookID)
        let header = {"Authorization": "Bearer " + localStorage.getItem("token")}
        axios.put("http://localhost:8080/api/book/" + (this.state.inStock ? "" : "un") + "ban/" + this.props.book.bookID, {headers: header})
            .then(response => {
                console.log(response.data)
                this.setState(prevState => {
                    return {inStock: !prevState.inStock}
                })
            })
            .catch(err => console.log(err))
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
                    <td>{this.props.book.totalCount - this.props.book.lendCount}</td>
                    <td>
                        {/*<Button variant="success">归还</Button>*/}
                        {
                            this.state.inStock ?
                            <Button variant="danger" onClick={this.handleClick}>下架</Button> :
                            <Button variant="success" onClick={this.handleClick}>上架</Button>
                        }
                    </td>
                </tr>
        )
    }
}

export default AdminBookRow