import * as types from './mutation-types'

export default {
  addNews: ({ commit }, payload) => {
    commit(types.ADD_NEWS, payload)
  },

  changeCurrentThemeId:({commit},payload) => {
    commit(types.CHANGE_CURRENT_THEMEID,payload)
  },

  addDate:({commit},payload) => {
    commit(types.ADD_DATE,payload)
  }
}