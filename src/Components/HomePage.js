import React from "react"
import BookCardGrid from "./BookGrid/BookCardGrid";
import Slideshow from "./Slideshow";

function HomePage(props) {
    let username = localStorage.getItem("username")

    return (
        <div className={"top-margin"}>
            <Slideshow username={username}/>
            <BookCardGrid username={username}/>
        </div>
    )
}

export default HomePage