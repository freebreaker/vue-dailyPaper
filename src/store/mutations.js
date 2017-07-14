import * as types from './mutation-types'

export default {
    [types.ADD_NEWS] (state,payload){
        state.list.push(payload)
    }
}