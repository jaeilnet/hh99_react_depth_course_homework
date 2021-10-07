import React from "react"
import { useSelector } from "react-redux"

export const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login)
  return (
    <>
      <h1>로그인체크</h1>
    </>
  )
}
