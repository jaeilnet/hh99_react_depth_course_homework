import React, { useEffect } from "react"
import { Post } from "../components/Post"
import { Grid, Text } from "../elements"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as postActions } from "../redux/modules/post"

export const PostList = (props) => {
  const dispatch = useDispatch()
  const post_list = useSelector((state) => console.log("asd", state.post))

  useEffect(() => {
    dispatch(postActions.getPostFB())
  }, [])
  console.log("olsdf", post_list)
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
