import variables from '@/styles/variables.scss'

const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  // return true 表示用户信息存在
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: () => variables, // 全局样式变量, 用于主题控制
  sidebarOpened: (state) => state.app.sidebarOpened
}
export default getters
