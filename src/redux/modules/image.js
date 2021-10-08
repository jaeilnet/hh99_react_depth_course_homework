import produce from "immer"
import { createAction, handleActions } from "redux-actions"

const UPLOAD = "UPLOAD"
const PREVIEW = "PREVIEW"
const LOADING = "LOADING"

const upload = createAction(UPLOAD, (img_url) => ({ img_url }))
const preview = createAction(PREVIEW, (preview) => ({ preview }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))

const initialState = {
  img_url: "",
  preview: null,
  is_loading: false,
}

export default handleActions(
  {
    [UPLOAD]: (action, state) => produce(state, (draft) => ({})),
    [PREVIEW]: (action, state) => produce(state, (draft) => ({})),
    [LOADING]: (action, state) => produce(state, (draft) => ({})),
  },
  initialState
)

const actionCreators = {
  upload,
  preview,
}

export { actionCreators }
