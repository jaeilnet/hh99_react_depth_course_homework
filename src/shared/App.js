import React from "react"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Header } from "../components/Header"
import { Login } from "../pages/Login"
import { PostDetail } from "../pages/PostDetail"
import { PostList } from "../pages/PostList"
import { PostWrite } from "../pages/PostWrite"
import { Signup } from "../pages/Signup"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/detail" exact component={PostDetail} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
