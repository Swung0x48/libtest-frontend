import React from "react"
import BookCardGrid from "./BookCardGrid";
import Slideshow from "./Slideshow";

function HomePage(props) {
    return (
        <div className={"top-margin"}>
            <Slideshow />
            <BookCardGrid />
        </div>
    )
}

export default HomePage