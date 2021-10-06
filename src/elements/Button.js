import React from "react"
import styled from "styled-components"

export const Button = (props) => {
  const { children, margin, color, width, height, bg, text } = props
  const styles = {
    color: color,
    bg: bg,
    width: width,
    height: height,
    margin: margin,
  }
  return <Buttons {...styles}>{text}</Buttons>
}

Button.defaultProps = {
  color: "#ffffff",
  text: false,
  bg: false,
  height: "100%",
  margin: false,
  width: "auto",
}

const Buttons = styled.button`
  background-color: black;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px 4px;
  padding: 5px;
  border: none;
  text-align: center;
`
