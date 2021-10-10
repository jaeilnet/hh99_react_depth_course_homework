import React, { useEffect } from "react"
import { Post } from "../components/Post"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as postActions } from "../redux/modules/post"

export const PostList = (props) => {
  const dispatch = useDispatch()

  const post_list = useSelector((state) => state.post.post_list)
  const user_info = useSelector((state) => state.user.user)

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB())
    }
  }, [])

  return (
    <>
      {post_list.map((e, i) => {
        if (user_info?.uid === e.user_info.uid) {
          return <Post key={e.id} {...e} is_me />
        } else {
          return <Post key={e.id} {...e} />
        }
      })}
    </>
  )
}
