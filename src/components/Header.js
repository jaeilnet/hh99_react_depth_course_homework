import React from "react"
import { Button, Grid, Text } from "../elements"

export const Header = () => {
  return (
    <>
      <Grid is_flex padding="10px 16px" bt>
        <Grid>
          <Button text="홈으로"> </Button>
        </Grid>
        <Grid is_flex>
          <Button text="내 정보"></Button>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </>
  )
}
