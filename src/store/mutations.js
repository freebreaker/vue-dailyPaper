import * as types from './mutation-types'

export default {
    [types.ADD_NEWS] (state,payload){
        state.articles=state.articles.concat(payload.articles)
        state.ids=state.articles.concat(payload.ids)
    }
}