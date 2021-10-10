import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../elements"
import { actionsCreators as imgActions } from "../redux/modules/image"

export const Upload = (props) => {
  const dispatch = useDispatch()

  const is_loading = useSelector((state) => state.image.is_loading)
  const imgRef = useRef()

  const onChange = (e) => {
    // input type file 비동기적으로 파일의 내용을 읽어들이는 데 사용됨
    const reader = new FileReader()

    // 현재 input 의 files 정보를 onChange 함수와 useRef를 통해 읽어옴
    const file = imgRef.current.files[0]

    // 바이너리 파일을 base64 encode 문자열로 반환
    // 그 외 readAsText() 텍스트로 읽기
    reader.readAsDataURL(file)

    // reader의 이벤트 핸들러 중 하나
    // onloaded 읽기 동작이 성공여부를 떠나 완료되었을 때 발생
    //  읽어온 결과를 result로 반환 받음
    reader.onloadend = () => {
      dispatch(imgActions.preview(reader.result))
    }
  }
  // const uploadFB = () => {
  //   let image = imgRef.current.files[0]
  //   dispatch(imgActions.uploadImgFB(image))
  // }

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
      {/* <Button _onClick={uploadFB}>업로드하기</Button> */}
    </>
  )
}

Upload.defaultProps = {}
