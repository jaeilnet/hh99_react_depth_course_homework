import React from "react"
import { useSelector } from "react-redux"

export const Upload = () => {
  const is_loading = useSelector((state) => state.image.is_loading)

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
      ></input>
    </>
  )
}

Upload.defaultProps = {}
