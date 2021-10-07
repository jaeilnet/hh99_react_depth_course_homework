import React from "react"
import { Grid, Text, Button, Image, Inputs } from "../elements"
import { Upload } from "../shared/Upload"

export const PostWrite = () => {
  return (
    <>
      <Grid padding="94px 0px 0px 0px">
        <Grid padding="16px">
          <Text center bold size="32px">
            게시글 작성
          </Text>
        </Grid>
        <Grid padding="16px">
          <Upload />
        </Grid>

        <Grid>
          <Text center bold size="18px">
            미리보기
          </Text>
          <Image type="rectangle" />
        </Grid>

        <Grid padding="16px">
          <Inputs label="게시글 내용"></Inputs>
          <Button width="100%" margin="0px" text="게시글 작성하기"></Button>
        </Grid>
      </Grid>
    </>
  )
}
