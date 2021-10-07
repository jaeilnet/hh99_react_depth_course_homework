import React from "react"
import styled from "styled-components"
import { Text, Grid } from "."

export const Inputs = (props) => {
  const { label, placeholder, _onChange, type } = props
  return (
    <>
      <Grid>
        {label && <Text>{label}</Text>}
        <Input
          placeholder={placeholder}
          onChange={_onChange}
          type={type}
        ></Input>
      </Grid>
    </>
  )
}

Inputs.defaultProps = {
  label: "라벨",
  type: "text",
  placeholder: " 입력을 확인해주세요",
  _onChange: () => {},
}

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin: 5px 0 16px 0;
  padding: 10px;
`
