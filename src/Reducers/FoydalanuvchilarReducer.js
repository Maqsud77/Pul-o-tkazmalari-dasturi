import {createAction,createReducer} from "@reduxjs/toolkit";

export const addUser=createAction("addUser")
export const deleteUser=createAction("deleteUser")
export const changeUser=createAction("changeUser")
export default function FoydalanuvchilarReducer(state = { users:[
        {id:1,Name:"Maqsud",Phone:34534545},
        {id:2,Name:"Elyor",Phone:54654656},
        {id:3,Name:"Abdulloh",Phone:6767545},
    ]}, action) {
    switch (action.type) {
        case 'addUser':
            let users =state.users
            action.payload.id=users.length+1
            users.push(action.payload)
            return {...state,users}
        case 'deleteUser':
            let filter =state.users.filter((item)=>{
                return item.id!==action.payload
            })
            return {...state,users:filter}
        case 'changeUser':
            let a =state.users.map((item)=>{
                if(item.id===action.payload.id){
                    return  state.users[action.payload.id-1]=action.payload;
                }
                return item
            })
            return {...state,users:a}
        default:
            return state
    }
}