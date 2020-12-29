import React from "react"
import { Card, Button } from "react-bootstrap"
import axios from "axios"

class BookCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let request = { bookId: this.props.id }
        let header = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
        axios.post("http://localhost:8080/api/order/lend", request, { headers: header })
            .then(response => {
                console.log(response)
                alert("借阅成功")
            })
            .catch(err => console.log(err))
    }

    render()
    {
        let baseUrl = "http://localhost:3000"
        // console.log(this.props.image)
        return (
            <Card className={"bookcard"}>
                <Card.Img variant="top" src={baseUrl + this.props.image.default} style={{minHeight: "250px"}}/>
                <Card.Body>
                    <Card.Title>{this.props.book.bookName}</Card.Title>
                    <Card.Text style={{minHeight: "100px"}}>
                        {this.props.book.publishing} <br />
                        {this.props.book.author}
                    </Card.Text>
                    {
                        this.props.showButton ?
                            (<Button variant="primary" disabled={this.props.book.nowCount <= 0} onClick={this.handleClick}>借阅</Button>) : null
                    }
                </Card.Body>
            </Card>)
    }
}

export default BookCard