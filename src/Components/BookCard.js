import React from "react"
import { Card, Button } from "react-bootstrap"

function BookCard(props) {
    return (
        <Card className={"bookcard"}>
            <Card.Img variant="top" src="../../public/assets" style={{minHeight: "250px"}}/>
            <Card.Body>
                <Card.Title>Book</Card.Title>
                <Card.Text style={{minHeight: "100px"}}>
                    The quick brown fox jumps over the lazy dog.
                </Card.Text>
                <Button variant="primary">借阅</Button>
            </Card.Body>
        </Card>)
}

export default BookCard