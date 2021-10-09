import React, { useEffect } from "react"
import { Post } from "../components/Post"
import { Grid, Text } from "../elements"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as postActions } from "../redux/modules/post"

export const PostList = (props) => {
  const dispatch = useDispatch()

  const post_list = useSelector((state) => state.post.post_list)

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB())
    }
  }, [])

  return (
    <>
      {post_list.map((e, i) => {
        return (
          <Grid key={i} width="70% center">
            <Post {...e} />
          </Grid>
        )
      })}
    </>
  )
}
