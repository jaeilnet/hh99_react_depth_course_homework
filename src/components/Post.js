import React from "react"
import { useSelector } from "react-redux"
import { Image, Text, Button, Grid, Inputs } from "../elements"

export const Post = (props) => {
  const is_login = useSelector((state) => state.user.is_login)

  return (
    <>
      <Grid padding="62px 0 0 0">
        {/* 프로필 사진 헤더영역 */}
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image type="circle" />
            <Text bold>{props.user_info.nick_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text font-size="14px">{props.comment_date}</Text>
            {is_login && <Button text="수정" width="50px"></Button>}
          </Grid>
        </Grid>

        {/* 게시글 내용 */}
        <Grid padding="6px 16px">
          <Text>{props.comment}</Text>
        </Grid>

        {/* 포스트 이미지 */}
        <Grid is_flex>
          <Grid>
            <Image type="rectangle" />
          </Grid>
        </Grid>

        {/* 댓글 갯수 */}
        <Grid padding="16px" bt>
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  )
}

Post.defaultProps = {
  user_info: {
    nick_name: "재롱이",
    user_profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  },
  post_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  comment: "피카추다아앙",
  comment_cnt: 2,
  comment_date: "2021-10-06  11:57:00",
}
