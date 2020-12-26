import React from "react"
import BookCard from "./BookCard"


function BookCardGrid(props) {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    let style = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        // display: "inline-block",
        maxWidth: "80%",
        margin: "0 auto"
    }

    return (
        <div className={"grid"}>
            {
                arr.map((e, index) => <BookCard id={index}/>)
            }
        </div>
    )
}

export default BookCardGrid