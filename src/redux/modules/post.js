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
  comment: "피카츄당",
  comment_cnt: 0,
  comment_date: moment().format("YYYY-MM-DD hh:mm:ss"),
}

// 미들웨어

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const post_list = firestore.collection("post")
  }
}

// 리듀서

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
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
}

export { actionCreators }
