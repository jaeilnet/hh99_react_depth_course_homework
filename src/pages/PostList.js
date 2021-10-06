import React from "react"
import { Post } from "../components/Post"
import { Grid, Text } from "../elements"
import { Comment } from "../components/Comment"

export const PostList = (props) => {
  return (
    <>
      <Grid>
        <Post />
      </Grid>
      <Grid>
        <Post />
      </Grid>
      <Grid>
        <Post />
      </Grid>
      <Grid>
        <Post />
      </Grid>
    </>
  )
}
