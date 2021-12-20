const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  // return true 表示用户信息存在
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters
