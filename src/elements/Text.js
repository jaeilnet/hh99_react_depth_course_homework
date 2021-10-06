import React from "react"
import styled from "styled-components"

export const Text = (props) => {
  const { children, margin, bold } = props

  const styles = { margin, bold }

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
}

const Word = styled.p`
  width: auto;
  height: 100%;
  margin: ${(props) => props.margin};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`
