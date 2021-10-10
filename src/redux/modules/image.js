import produce from "immer"
import { createAction, handleActions } from "redux-actions"
import { firestore, storage } from "../../shared/firebase"

const UPLOAD_IMG = "UPLOAD"
const UPLOADING = "UPLOADING"
const SET_PREVIEW = "SET_PREVIEW"

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }))
const upload_img = createAction(UPLOAD_IMG, (post_url) => ({ post_url }))
const preview = createAction(SET_PREVIEW, (preview) => ({ preview }))

const initialState = {
  post_url: "",
  uploading: false,
  preview: null,
}

const uploadImgFB = (image) => {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true))
    const _upload = storage.ref(`/img/${image.name}`).put(image)

    _upload.then((img) => {
      img.ref.getDownloadURL().then((url) => {
        dispatch(upload_img(url))
      })
    })
  }
}

export default handleActions(
  {
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading
      }),
    [UPLOAD_IMG]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload)
        draft.post_url = action.payload.post_url
        draft.uploading = false
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview
      }),
  },
  initialState
)

const actionsCreators = {
  upload_img,
  uploading,
  uploadImgFB,
  preview,
}


export { actionsCreators }