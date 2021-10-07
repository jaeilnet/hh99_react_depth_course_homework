import produce from "immer"
import { createAction, handleActions } from "redux-actions"
import { auth } from "../../shared/firebase"
import firebase from "@firebase/app-compat"
import { deleteCookie, setCooke } from "../../shared/Cookie"

// 액션 타입 정의

const SET_USER = "SET_USER"
const GET_USER = "GET_USER"
const LOGOUT = "LOGOUT"

// 액션 생성 함수
const setUser = createAction(SET_USER, (user) => ({ user }))
const getUser = createAction(GET_USER, (user) => ({ user }))
const logOut = createAction(LOGOUT, (user) => ({ user }))

// 초기갑 세팅
const initialState = {
  user: null,
  is_login: false,
}

// 미들웨어

// 아이디 닉네임 비밀번호 받아오기
const signupFB = (id, pwd, nickname) => {
  return function (dispatch, getState, { history }) {
    // 참고
    //  https://firebase.google.com/docs/auth/web/start?authuser=0
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        auth.currentUser
          .updateProfile({
            displayName: nickname,
          })
          .then(() => {
            dispatch(
              setUser({
                nickname: nickname,
                id: id,
                uid: user.user.uid,
                user_profile: "",
              })
            )
            history.push("/")
          })
          .catch((error) => {
            console.log("프로필 업데이트 에러입니다.", error)
          })
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log("회원가입 에러입니다.", errorCode, errorMessage)
      })
  }
}

const logInFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    // 참고링크
    // https://firebase.google.com/docs/auth/web/start?authuser=0
    // 인증상태 지속성
    auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then((res) => {
        auth.signInWithEmailAndPassword(id, pwd).then((user) => {
          dispatch(
            setUser({
              nickname: user.user.displayName,
              id: id,
              user_profile: "",
              uid: user.user.uid,
            })
          )
          history.push("/")
        })
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log("로그인 에러입니다.", errorCode, errorMessage)
      })
  }
}

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    // 참고
    // https://firebase.google.com/docs/auth/web/start?authuser=0

    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            nickname: user.displayName,
            id: user.email,
            uid: user.uid,
            user_profile: "",
          })
        )
      } else {
        dispatch(logOut())
      }
    })
  }
}

const logOutFB = () => {
  return function (dispatch, getState, { history }) {
    auth
      .signOut()
      .then(() => {
        dispatch(logOut())
        history.replace("/")
      })

      .catch((err) => {
        console.log("로그아웃 err", err)
      })
  }
}

//  리덕스(리듀스)만들기 액션함수가 불러졌을 때 실행 할 코드

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // 쿠키를 만들어준다. key, value
        setCooke("is_login", "success")
        // 현재 정보를 액션 정보로 덮어씌우기
        console.log("동작")
        draft.user = action.payload.user
        draft.is_login = true
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login")
        draft.user = null
        draft.is_login = false
      }),
  },
  initialState
)

const actionCreators = {
  logInFB,
  signupFB,
  logOutFB,
  loginCheckFB,
}

export { actionCreators }
