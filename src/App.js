import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import Header from "./Components/Header"
import RecordTable from "./Components/RecordTable"
import HomePage from "./Components/HomePage"
import LoginPage from "./Components/LoginPage"
import { Route, HashRouter } from "react-router-dom"

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        isLoading: true,
        data: null,
        username: null,
        token: null
    }
  }

  componentDidMount() {
      this.setState({
          username: localStorage.getItem("username"),
          token: localStorage.getItem("token")
      })
    // axios.post('http://localhost:8080/api/user/login', {
    //     username: "Swung",
    //     password: "123456"
    // })
    //     .then(response => response.data)
    //     .then(data => {
    //       console.log(data)
    //       if (data !== undefined) {
    //         this.setState({
    //           isLoading: false,
    //           data: data
    //         })
    //       }
    //       else throw data
    //     })
    //     .catch(e => {
    //       console.log(e)
    //       this.setState({error: true})
    //       console.log("this.state.error: " + this.state.error)
    //     })
  }

  render() {
    return (
            <div>
                <HashRouter>
                    <Header username={this.state.username} />
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/checkout" component={RecordTable}/>
                    <Route path="/login" component={LoginPage}/>
                </HashRouter>
            </div>

        // <HashRouter>
        //     <div>
        //         <h1>Simple SPA</h1>
        //         <ul className="header">
        //             <li><NavLink to="/">Home</NavLink></li>
        //             <li><NavLink to="/stuff">Stuff</NavLink></li>
        //             <li><NavLink to="/contact">Contact</NavLink></li>
        //         </ul>
        //         <div className="content">
        //             <Route exact path="/" component={HomePage}/>
        //             <Route path="/stuff" component={Slideshow}/>
        //             <Route path="/contact" component={BookCardGrid}/>
        //         </div>
        //     </div>
        // </HashRouter>
    )
  }
}

export default App