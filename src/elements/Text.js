import React from "react"
import styled from "styled-components"

export const Text = (props) => {
  const { children, margin, bold, size, center } = props

  const styles = { margin, bold, size, center }

  return (
    <>
      <Word {...styles}>{children}</Word>
    </>
  )
}

Text.defaultProps = {
  children: null,
  margin: "0px 6px",
  bold: false,
  size: "14px",
  center: false,
}

const Word = styled.p`
  /* height: 100%; */
  margin: ${(props) => props.margin};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  font-size: ${(props) => props.size};
  text-align: ${(props) => (props.center ? "center" : null)};
`
