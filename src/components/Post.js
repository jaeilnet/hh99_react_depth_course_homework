import React from "react"
import { Image, Text, Button, Grid, Inputs } from "../elements"

export const Post = () => {
  return (
    <>
      <Grid>
        {/* 프로필 사진 헤더영역 */}
        <Grid is_flex padding="16px">
          <Grid is_flex>
            <Image type="circle" />
            <Text bold>재롱이</Text>
          </Grid>
          <Grid is_flex>
            <Text>2021-10-06 11:57:00</Text>
            <Button text="수정"> </Button>
          </Grid>
        </Grid>

        {/* 게시글 내용 */}
        <Grid padding="6px 16px">
          <Text>피카피카!피카피카피카</Text>
        </Grid>

        {/* 포스트 이미지 */}
        <Grid is_flex>
          <Grid>
            <Image type="rectangle" />
          </Grid>
        </Grid>

        {/* 댓글 갯수 */}
        <Grid padding="16px" bt>
          <Text bold>댓글 99개</Text>
        </Grid>
      </Grid>
    </>
  )
}
