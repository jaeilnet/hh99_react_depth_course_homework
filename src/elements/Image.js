import React from "react"
import styled from "styled-components"

export const Image = (props) => {
  const { type, src, size, width, paddingTop } = props
  const styles = {
    src,
    size,
    type,
    width,
    paddingTop,
  }
  if (type === "circle") {
    return (
      <>
        <CircleImage {...styles} />
      </>
    )
  }

  if (type === "rectangle") {
    return (
      <>
        <RectangleImage {...styles} />
      </>
    )
  }
}

Image.defaultProps = {
  src: "http://via.placeholder.com/400x300",
  size: 36,
  type: "circle",
  width: "100%",
  paddingTop: false,
}

const CircleImage = styled.div`
  /* 사이즈 지정 가로x 세로 값을 쉽게 얻을 수 있음 */
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center center;
`

const RectangleImage = styled.div`
  ${(props) => (props.paddingTop ? "padding-top : 75px;" : props.padding)}
  width: ${(props) => props.width};
  min-height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`
