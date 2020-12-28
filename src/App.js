import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import Header from "./Components/Header"
import RecordTable from "./Components/RecordTable"
import HomePage from "./Components/HomePage"
import LoginPage from "./Components/LoginPage"
import { Route, HashRouter } from "react-router-dom"
import AdminPage from "./Components/AdminPage"

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        isLoading: true,
        data: null,
        username: null,
    }
  }

  componentDidMount() {
      this.setState({
          username: localStorage.getItem("username"),
      })
  }

    render() {
    return (
            <div>
                <HashRouter>
                    <Header username={this.state.username} />
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/checkout" component={RecordTable}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/admin" component={AdminPage}/>
                </HashRouter>
            </div>
    )
  }
}

export default App