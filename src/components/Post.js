import React from "react"
import { useSelector } from "react-redux"
import { Image, Text, Button, Grid } from "../elements"

export const Post = (props) => {
  const is_login = useSelector((state) => state.user.is_login)

  if (props.layout.centerText === true) {
    return (
      <>
        <Grid padding="62px 0 0 0">
          {/* 프로필 사진 헤더영역 */}
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image type="circle" />
              <Text bold>{props.user_info.nickname}</Text>
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
            <Text bold>좋아요 {props.like_cnt}개</Text>
          </Grid>
        </Grid>
      </>
    )
  }
  if (props.layout.leftText === true) {
    return (
      <>
        <Grid padding="62px 0 0 0">
          {/* 프로필 사진 헤더영역 */}
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image type="circle" />
              <Text bold>{props.user_info.nickname}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text font-size="14px">{props.comment_date}</Text>
              {is_login && <Button text="수정" width="50px"></Button>}
            </Grid>
          </Grid>

          {/* 게시글 내용 */}
          <Grid is_flex>
            <Image type="rectangle" width="50%" />
            <Text margin="auto" center>
              {props.comment}
            </Text>
          </Grid>

          {/* 댓글 갯수 */}
          <Grid padding="16px" bt>
            <Text bold>좋아요 {props.like_cnt}개</Text>
          </Grid>
        </Grid>
      </>
    )
  }
  if (props.layout.rightText === true) {
    return (
      <>
        <Grid padding="62px 0 0 0">
          {/* 프로필 사진 헤더영역 */}
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image type="circle" />
              <Text bold>{props.user_info.nickname}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text font-size="14px">{props.comment_date}</Text>
              {is_login && <Button text="수정" width="50px"></Button>}
            </Grid>
          </Grid>

          {/* 게시글 내용 */}
          <Grid is_flex>
            <Text margin="auto" center>
              {props.comment}
            </Text>
            <Image type="rectangle" width="50%" />
          </Grid>

          {/* 댓글 갯수 */}
          <Grid padding="16px" bt>
            <Text bold>좋아요 {props.like_cnt}개</Text>
          </Grid>
        </Grid>
      </>
    )
  }
  return <h1>빈란</h1>
}

Post.defaultProps = {
  user_info: {
    nickname: "재롱이",
    user_profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  },
  post_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  comment: "피카추다아앙",
  like_cnt: 2,
  comment_date: "2021-10-06  11:57:00",
  layout: {
    centerText: false,
    rightText: false,
    leftText: false,
  },
}
