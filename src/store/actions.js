import * as types from './mutation-types'

export default {
  addNews: ({ commit }, payload) => {
    commit(types.ADD_NEWS, payload)
  }
}