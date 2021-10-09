import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"
import { firestore, storage } from "../../shared/firebase"
import moment from "moment"

// 글 가져오기
const SET_POST = "SET_POST"
// 추가
const ADD_POST = "ADD_POST"

const EDIT_POST = "EDIT_POST"
const LOADING = "LOADING"

// 액션함수

// 글 목록 불러오기
const setPost = createAction(SET_POST, (post_list) => ({ post_list }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const editPost = createAction(EDIT_POST, (post_id, post) => ({ post_id, post }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))

const initialState = {
  post_list: [],
  is_loading: false,
}

const initialPost = {
  img_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  comment: "",
  comment_date: moment().format("YYYY-MM-DD hh:mm:ss"),
  like_cnt: 0,
  layout_type: "centerText",
}

// 미들웨어

const addPostFB = (layouts, comment = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post")
    const _user = getState().user.user

    const user_info = {
      id: _user.uid,
      nickname: _user.nickname,
      user_profile: _user.user_profile,
    }

    const _post = {
      ...initialPost,
      comment: comment,
      layout_type: layouts,
      comment_date: moment().format("YYYY-MM-DD hh:mm:ss"),
    }

    postDB
      .add({ ...user_info, ..._post })
      .then((doc) => {
        let post = { user_info, ..._post, id: doc.id }
        dispatch(addPost(post))
      })
      .catch((err) => {
        console.log(err, "post 작성 에러")
      })
  }
}

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post")

    postDB.get().then((docs) => {
      let postList = []
      docs.forEach((doc) => {
        // console.log("aa", doc.id, doc.data())
        let _post = { id: doc.id, ...doc.data() }

        let post = {
          id: doc.id,
          user_info: {
            nickname: _post.nickname,
            user_profile: _post.user_profile,
          },
          comment: _post.comment,
          img_url: _post.post_url,
          comment_date: _post.comment_date,
          like_cnt: _post.like_cnt,
          layout_type: _post.layout_type
        }
        postList.push(post)
      })
      dispatch(setPost(postList))
    })
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list = action.payload.post_list
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list.unshift(action.payload.post)
      }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {}),
    [LOADING]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
)

const actionCreators = {
  setPost,
  addPost,
  editPost,
  loading,
  getPostFB,
  addPostFB,
}

export { actionCreators }
