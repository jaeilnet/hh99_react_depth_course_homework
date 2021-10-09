import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../elements"
import { actionsCreators as imgActions } from "../redux/modules/image"

export const Upload = (props) => {
  const dispatch = useDispatch()

  const is_loading = useSelector((state) => state.image.is_loading)
  const imgRef = useRef()

  const onChange = (e) => {
    const reader = new FileReader()

    const file = imgRef.current.files[0]
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      console.log(reader.result)
    }
  }
  const uploadFB = () => {
    let image = imgRef.current.files[0]
    dispatch(imgActions.uploadImgFB(image))
  }

  return (
    <>
      <input
        type="file"
        disabled={is_loading}
        style={{
          // border: "3px solid black",
          margin: "auto",
          display: "flex",
          cursor: "pointer",
        }}
        ref={imgRef}
        onChange={onChange}
      ></input>
      <Button _onClick={uploadFB}>업로드하기</Button>
    </>
  )
}

Upload.defaultProps = {}
