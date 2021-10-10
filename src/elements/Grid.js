import React from "react"
import styled from "styled-components"

export const Grid = (props) => {
  const {
    children,
    width,
    padding,
    is_flex,
    margin,
    bt,
    center,
    _onClick,
    bg,
  } = props
  const styles = {
    is_flex,
    width: width,
    padding: padding,
    margin,
    bt,
    center,
    bg,
  }
  return (
    <>
      <GridBox onClick={_onClick} {...styles}>
        {children}
      </GridBox>
    </>
  )
}

Grid.defaultProps = {
  children: null,
  width: "100%",
  padding: false,
  is_flex: false,
  margin: false,
  bt: false,
  center: false,
  bg: null,
  onClick: () => {},
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding:${props.padding}; ` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items : center; justify-content: space-between;
`
      : ""}
  margin: ${(props) => (props.center ? "auto" : props.margin)};
  border-bottom: ${(props) => (props.bt ? "4px solid skyblue;" : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : null)}
`
