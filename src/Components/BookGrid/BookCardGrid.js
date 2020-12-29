import React from "react"
import BookCard from "./BookCard"
import axios from "axios";
import { Spinner } from "react-bootstrap"
import {importAll} from "../../Helper";


class BookCardGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            books: [{
                "bookID": 1,
                "bookName": "Java编程思想",
                "author": "Bruch Eckel",
                "publishing": "机械工业出版社",
                "price": 79.2,
                "totalCount": 100,
                "lendCount": 66,
                "nowCount": 34
            }]
        }
    }


    componentDidMount() {
        const images = importAll(require.context('../../../public/assets/img', false, /\.(png|jpe?g|svg)$/));
        console.log(images)
        axios.get("http://localhost:8080/api/book/get", {
            headers: {"Authorization": "Bearer " + localStorage.getItem("token")}
        }).then(res => {
            this.setState({
                isLoading: false,
                books: res.data,
                images: images
            })
        })
    }

    // let style = {
    //     display: "flex",
    //     justifyContent: "center",
    //     flexWrap: "wrap",
    //     // display: "inline-block",
    //     maxWidth: "80%",
    //     margin: "0 auto"
    // }
    render() {
        // let arr = [1, 2, 3, 4, 5, 6, 7, 8]

        return (
            this.state.isLoading ?
                (<Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>) :
                (<div className={"grid"}>
                    {
                        this.state.books.map((e, index) => <BookCard key={index} id={index + 1} book={e} image={this.state.images[index]} showButton={!!this.props.username}/>)
                    }
                </div>)
        )
    }
}

export default BookCardGrid