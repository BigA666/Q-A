import {combineReducers} from 'redux'

function update_gender(state='', action){
    // console.log(action)
    if(action.type === 'update_gender'){
        // console.log(555)
        return action.data
    }
    // console.log(666)
    return state
}
function history (state=[], action){
    if(action.type == 'getHistory'){
        return [...action.data]
    }
    return [...state]
}
function food (state=[], action){
    if(action.type == 'food'){
        return [...action.data]
    }
    return [...state]
}
function hateFoodFn (state=[], action){
    if(action.type == 'hateFood'){
        return [...action.data]
    }
    return [...state]
}
function feelingFn (state=[], action){
    //  console.log(action)
    if(action.type == 'feelingFn'){
        return [...action.data]
    }
    return [...state]
}
export default combineReducers({ // 这是抛出的总数据源
    update_gender,
    history,
    food,
    hateFoodFn,
    feelingFn             
})