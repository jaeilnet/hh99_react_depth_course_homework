import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Grid, Inputs, Text } from "../elements"
import { emailCheck } from "../shared/common"
import { actionCreators as userActions } from "../redux/modules/user"

export const Signup = () => {
  const dispatch = useDispatch()

  const [id, setId] = useState("")
  const [pwd, setPwd] = useState("")
  const [nickname, setNickname] = useState("")
  const [pwd2, setPwd2] = useState("")

  const signup = () => {
    if (id === "" || pwd === "" || nickname === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!")
      return
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!")
      return
    }

    if (pwd !== pwd2) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!")
      return
    }

    dispatch(userActions.signupFB(id, pwd, nickname))

  }
  return (
    <>
      <Grid padding="94px 16px 16px 16px">
        <Text bold size="32px" center>
          회원가입
        </Text>
      </Grid>
      <Grid padding="16px" width="80%" center>
        <Inputs
          type="email"
          label="아이디"
          placeholder="아이디를 확인해주세요"
          _onChange={(e) => {
            setId(e.target.value)
          }}
        ></Inputs>
        <Inputs
          label="닉네임"
          placeholder="닉네임을 확인해주세요"
          _onChange={(e) => {
            setNickname(e.target.value)
          }}
        />
        <Inputs
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 확인해주세요"
          _onChange={(e) => {
            setPwd(e.target.value)
          }}
        ></Inputs>
        <Inputs
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 확인해주세요"
          _onChange={(e) => {
            setPwd2(e.target.value)
          }}
        />
        <Button
          width="100%"
          padding="20px"
          margin="20px 0px 0px 0px"
          text="가입하기"
          size="16px"
          _onClick={signup}
        ></Button>
      </Grid>
    </>
  )
}
