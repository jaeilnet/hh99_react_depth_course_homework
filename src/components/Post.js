import React from "react"
import { useSelector } from "react-redux"
import { Image, Text, Button, Grid } from "../elements"
import { history } from "../redux/configStore"

export const Post = (props) => {
  const post_list = useSelector((state) => state.post.post_list)
  return (
    <>
      <Grid>
        {/* 프로필 사진 헤더영역 */}
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image type="circle" src={props.post_url} />
            <Text bold>{props.user_info.nickname}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text font-size="14px">{props.comment_date}</Text>
            {props.is_me && <Button text="수정" width="50px"></Button>}
          </Grid>
        </Grid>
        {props.layout_type === "centerText" && (
          <Grid bg="#fff">
            <Grid padding="6px 16px">
              <Text>{props.comment}</Text>
            </Grid>
            <Grid is_flex>
              <Grid
                _onClick={() => {
                  history.push(`/detail/${post_list.id}`)
                }}
              >
                <Image type="rectangle" paddingTop src={props.post_url} />
              </Grid>
            </Grid>
          </Grid>
        )}
        {props.layout_type === "rightText" && (
          <>
            {/* 게시글 내용 */}
            <Grid is_flex bg="#fff">
              <Image type="rectangle" width="50%" src={props.post_url} />
              <Text margin="auto" center>
                {props.comment}
              </Text>
            </Grid>
          </>
        )}
        {props.layout_type === "leftText" && (
          <>
            <Grid is_flex bg="#fff">
              <Text margin="auto" center>
                {props.comment}
              </Text>
              <Image type="rectangle" width="50%" src={props.post_url} />
            </Grid>
          </>
        )}
        {/* 댓글 갯수 */}
        <Grid padding="16px" bt>
          <Text bold>좋아요 {props.like_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  )
}

Post.defaultProps = {
  user_info: {
    nickname: "재롱이",
    user_profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  },
  imag_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  comment: "피카추다아앙",
  like_cnt: 2,
  comment_date: "2021-10-06  11:57:00",
  layout_type: "centerText",
  is_me: false,
}
