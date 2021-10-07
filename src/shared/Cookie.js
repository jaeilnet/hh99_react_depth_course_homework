export const getCookie = (name) => {
  let value = ";" + document.cookie

  console.log(value)

  let parts = value.split(`; ${name}=`)

  if (parts.length === 2) {
    return parts.pop().split(";").shift()
  }
}

export const setCooke = (name, value, exp = 5) => {
  let date = new Date()
  date.setTime(date.getTime() | (exp * 24 * 60 * 60 * 1000))

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`
}

export const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString()

  document.cookie = name + "=; expries=" + date
}
