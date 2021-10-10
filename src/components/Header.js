import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid } from "../elements"
import { history } from "../redux/configStore"
import { apiKey } from "../shared/firebase"
import { actionCreators as userActions } from "../redux/modules/user"
import styled from "styled-components"

export const Header = (props) => {
  const dispatch = useDispatch()

  const is_login = useSelector((state) => state.user.is_login)
  const is_session = sessionStorage.getItem(
    `firebase:authUser:${apiKey}:[DEFAULT]`
  )
    ? true
    : false

  if (is_login && is_session) {
    return (
      <>
        <HeaderContainer>
          <Grid is_flex padding="10px 16px">
            <Grid>
              <Button
                text="홈으로"
                _onClick={() => {
                  history.push("/")
                }}
              ></Button>
            </Grid>
            <Grid is_flex width="auto">
              <Button text="내 정보"></Button>
              <Button
                text="알림"
                _onClick={() => {
                  history.push("/alarm")
                }}
              ></Button>
              <Button
                text="로그아웃"
                _onClick={() => {
                  // if (window.confirm("로그아웃 하시겠습니까?")) {
                  //   dispatch(userActions.logOutFB())
                  // }
                  dispatch(userActions.logOutFB())
                }}
              ></Button>
            </Grid>
          </Grid>
        </HeaderContainer>
      </>
    )
  }
  return (
    <>
      <HeaderContainer>
        <Grid is_flex padding="10px 16px">
          <Grid>
            <Button
              text="홈으로"
              _onClick={() => {
                history.push("/")
              }}
            ></Button>
          </Grid>
          <Grid is_flex width="auto">
            <Button
              text="로그인"
              _onClick={() => {
                history.push("/login")
              }}
            ></Button>
            <Button
              text="회원가입"
              _onClick={() => {
                history.push("/signup")
              }}
            ></Button>
          </Grid>
        </Grid>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  width: auto;
  background-color: black;
`
