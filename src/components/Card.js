import React from "react"
import { Grid, Image, Text } from "../elements"

export const Card = (props) => {
  const { user_profile, nickname } = props
  return (
    <>
      <Grid padding="16px" is_flex bg="#EFF6FF">
        <Grid width="auto">
          <Image type="circle" size={100}>
            {user_profile}
          </Image>
        </Grid>
        <Grid>
          <Text center>
            <b>{nickname}</b> 님이 게시글에 댓글을 남겼습니다.
          </Text>
        </Grid>
      </Grid>
    </>
  )
}

Card.defaultProp = {
  nickname: "재롱이",
  user_profile: "http://via.placeholder.com/400x300",
}
