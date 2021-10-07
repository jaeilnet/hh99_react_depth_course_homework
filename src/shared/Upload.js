import React from "react"
import styled from "styled-components"
import { Button } from "../elements"

export const Upload = () => {
  return (
    <>
      <input
        type="file"
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
