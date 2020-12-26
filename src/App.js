import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import axios from "axios"
import Header from "./Components/Header"
import Slideshow from "./Components/Slideshow"
import BookCard from "./Components/BookCard"
import BookCardGrid from "./Components/BookCardGrid"
import RecordTable from "./Components/RecordTable";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        isLoading: true,
        data: null
    }
  }

  componentDidMount() {
    axios.post('http://localhost:8080/api/user/login', {
        username: "Swung",
        password: "123456"
    })
        .then(response => response.data)
        .then(data => {
          console.log(data)
          if (data !== undefined) {
            this.setState({
              isLoading: false,
              data: data
            })
          }
          else throw data
        })
        .catch(e => {
          console.log(e)
          this.setState({error: true})
          console.log("this.state.error: " + this.state.error)
        })
  }

  render() {
    return (
        <div>
            <Header />
            <Slideshow />
            <BookCardGrid />
            {/*<RecordTable />*/}
            {/*this.state.isLoading ?*/}
            {/*    <p>Loading...</p>*/}
            {/*    : (<div>*/}
            {/*          <p>sumTotalCount: {this.state.data.sumTotalCount}</p>*/}
            {/*          <p>sumNowCount: {this.state.data.sumNowCount}</p>*/}
            {/*          <p>sumLendCount: {this.state.data.sumLendCount}</p>*/}
            {/*        </div>)*/}
        </div>
    )
  }
}

export default App;
