import React from "react"
import styled from "styled-components"

export const Button = (props) => {
  const {
    children,
    margin,
    color,
    padding,
    width,
    height,
    bg,
    text,
    _onClick,
    size,
    plus,
  } = props
  const styles = {
    color: color,
    bg: bg,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    size: size,
  }
  if (plus) {
    return (
      <>
        <PlusButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </PlusButton>
      </>
    )
  }

  return (
    <Buttons {...styles} onClick={_onClick}>
      {text ? text : children}
    </Buttons>
  )
}

Button.defaultProps = {
  color: "#ffffff",
  text: false,
  bg: false,
  width: "100px",
  _onClick: () => {},
  padding: "10px",
  margin: "0px 4px",
  size: "",
  plus: false,
}

const Buttons = styled.button`
  background-color: black;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: none;
  text-align: center;
  box-sizing: border-box;
  font-size: ${(props) => props.size};
`

const PlusButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: #84c7ff;
  text-align: center;
  border: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 4px 4px 3px blue;
  font-weight: 600;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    transition: linear 0.2s;
    padding: 13px;
    opacity: 1;
  }
`
