import React, { useState } from "react"
import { Grid, Text, Button, Image, Inputs } from "../elements"
import { Upload } from "../shared/Upload"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as postActions } from "../redux/modules/post"
import { history } from "../redux/configStore"

export const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login)
  const dispatch = useDispatch()
  const [layouts, setLayouts] = useState()
  const [comment, setComment] = useState()

  const img = (e) => {
    console.log(e.target.file)
  }

  const writeButton = () => {
    if (layouts === undefined || comment === undefined) {
      window.alert("레이아웃을 선택해주세요")
      return
    }

    dispatch(postActions.addPostFB(layouts, comment))
    history.push("/")
  }

  // if (!is_login) {
  //   window.alert("로그인 후에 이용해주세요!")
  //   history.replace("/")
  // }

  return (
    <>
      <Grid padding="94px 0px 0px 0px">
        <Grid padding="16px">
          <Text center bold size="32px">
            게시글 작성
          </Text>
        </Grid>

        <Grid margin="32px">
          <Upload />
        </Grid>

        <Text center bold size="18px">
          레이아웃을 선택해주세요
        </Text>

        <input
          type="radio"
          id="rightText"
          name="layout"
          onChange={(e) => {
            setLayouts(e.target.id)
          }}
          style={{ width: "100%" }}
        />
        <Grid is_flex bt>
          <Image type="rectangle" width="50%" _onChange={img} />
          <Text margin="auto" center>
            게시글
          </Text>
        </Grid>

        <input
          type="radio"
          id="leftText"
          name="layout"
          onChange={(e) => {
            setLayouts(e.target.id)
          }}
          style={{ width: "100%" }}
        />
        <Grid is_flex bt>
          <Text margin="auto" center>
            게시글
          </Text>
          <Image type="rectangle" width="50%" />
        </Grid>
        <input
          type="radio"
          id="centerText"
          name="layout"
          onChange={(e) => {
            setLayouts(e.target.id)
          }}
          style={{ width: "100%" }}
        />
        <Grid padding="16px" bt>
          <Text margin="auto" center>
            게시글
          </Text>
          <Image type="rectangle" />
        </Grid>

        <Grid padding="16px">
          <Inputs
            label="게시글 작성"
            padding="20px"
            _onChange={(e) => {
              setComment(e.target.value)
            }}
          />
          <Button
            margin="0px"
            width="100%"
            text="글 작성하기"
            _onClick={() => {
              writeButton()
            }}
          ></Button>
        </Grid>
      </Grid>
    </>
  )
}
