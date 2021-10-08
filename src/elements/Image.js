import React from "react"
import styled from "styled-components"

export const Image = (props) => {
  const { type, src, size, width } = props
  const styles = {
    src,
    size,
    type,
    width,
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
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UZUOTlXVlH90c5kSpdzwLiIcRAYTUr4oA&usqp=CAU",
  size: 36,
  type: "circle",
  width: "100%",
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
  padding-top: 75px;
  width: ${(props) => props.width};
  min-height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`
