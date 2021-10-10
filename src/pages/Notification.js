import React from "react"
import { Card } from "../components/Card"
import { Grid, Image, Text } from "../elements"

export const Notification = (props) => {
  let noti = [
    { nickname: "aaaa", post_id: "post1", user_profile: "" },
    { nickname: "aaaa", post_id: "post2", user_profile: "" },
    { nickname: "aaaa", post_id: "post3", user_profile: "" },
    { nickname: "aaaa", post_id: "post4", user_profile: "" },
    { nickname: "aaaa", post_id: "post5", user_profile: "" },
    { nickname: "aaaa", post_id: "post6", user_profile: "" },
  ]

  return (
    <>
      <Grid>
        {noti.map((n) => {
          return <Card key={n.post_id} {...n} />
        })}
      </Grid>
    </>
  )
}
