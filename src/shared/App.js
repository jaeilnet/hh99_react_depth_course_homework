import React, { useEffect } from "react"
import { history } from "../redux/configStore"

import { Route } from "react-router"

import { Header } from "../components/Header"

import { Login } from "../pages/Login"
import { PostDetail } from "../pages/PostDetail"
import { PostList } from "../pages/PostList"
import { PostWrite } from "../pages/PostWrite"
import { Signup } from "../pages/Signup"
import { ConnectedRouter } from "connected-react-router"
import { useDispatch, useSelector } from "react-redux"
import { apiKey } from "./firebase"
import { actionCreators as userActions } from "../redux/modules/user"
import { Button, Grid } from "../elements"

function App() {
  const dispatch = useDispatch()

  const is_login = useSelector((state) => state.user.is_login)
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`

  const is_session = sessionStorage.getItem(_session_key) ? true : false

  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB())
    }
  }, [])

  return (
    <>
      <Grid>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/detail" exact component={PostDetail} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </ConnectedRouter>
      </Grid>
      {is_login && is_session ? (
        <Button
          plus
          text="글쓰기"
          _onClick={() => {
            history.push("/write")
          }}
        ></Button>
      ) : null}
    </>
  )
}

export default App
