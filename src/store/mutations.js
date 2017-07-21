import * as types from './mutation-types'

export default {
    [types.ADD_NEWS] (state,payload){
        state.list.push(payload)
    },

    [types.CHANGE_CURRENT_THEMEID](state,payload){
        state.themeid=payload
    },

    [types.ADD_DATE](state,payload){
        state.date=payload
    }
}