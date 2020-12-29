import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import Header from "./Components/Header"
import OrderTable from "./Components/OrderTable/OrderTable"
import HomePage from "./Components/HomePage"
import LoginPage from "./Components/LoginPage"
import { Route, HashRouter } from "react-router-dom"
import AdminPage from "./Components/Admin/AdminPage"
import AdminBookTable from "./Components/Admin/AdminBookTable/AdminBookTable"
import AdminOrderTable from "./Components/Admin/AdminOrderTable/AdminOrderTable"
import RegisterPage from "./Components/RegisterPage"
import AdminUserTable from "./Components/Admin/AdminUserTable/AdminUserTable"
import { importAll } from "./Helper"

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        isLoading: true,
        data: null,
        username: null,
        role: null
    }
  }

  componentDidMount() {
      this.setState({
          username: localStorage.getItem("username"),
          role: localStorage.getItem("role")
      })
  }

    render() {
    return (
            <div>
                <HashRouter>
                    <Header username={this.state.username} role={this.state.role} />
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/checkout" component={OrderTable}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/admin/books" component={AdminBookTable}/>
                    <Route path="/admin/orders" component={AdminOrderTable}/>
                    <Route path="/admin/users" component={AdminUserTable}/>
                </HashRouter>

                {/*<RegisterPage />*/}
            </div>
    )
  }
}

export default App