import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Grid, Inputs, Text } from "../elements"
import { actionCreators as userActions } from "../redux/modules/user"
import { emailCheck } from "../shared/common"

export const Login = (props) => {
  const dispatch = useDispatch()

  //  로그인 아이디 비밀번호 state 관리
  const [id, setid] = useState("")
  const [pwd, setpwd] = useState("")

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!")
      return
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!")
      return
    }
    dispatch(userActions.logInFB(id, pwd))
  }

  return (
    <>
      <Grid padding="94px 16px 16px 16px">
        <Text bold size="32px" center>
          로그인
        </Text>
      </Grid>
      <Grid padding="16px" width="80%" center>
        <Inputs
          label="아이디"
          placeholder="아이디를 확인해주세요"
          _onChange={(e) => {
            setid(e.target.value)
          }}
        ></Inputs>
        <Inputs
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 확인해주세요"
          _onChange={(e) => {
            setpwd(e.target.value)
          }}
        />
        <Button
          width="100%"
          padding="20px"
          margin="20px 0px 0px 0px"
          text="로그인 하기"
          size="16px"
          _onClick={login}
        ></Button>
      </Grid>
    </>
  )
}
