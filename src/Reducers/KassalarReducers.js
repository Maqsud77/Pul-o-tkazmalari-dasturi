import {createAction,createReducer} from "@reduxjs/toolkit";
export const addKassa =createAction("addKassa")
export const deleteKassa =createAction("deleteKassa")
export const changeKassa =createAction("changeKassa")

export default function KassalarReducer(state = { kassalar:[
        {id:1,Name:"Kassa 1"},
        {id:2,Name:"Kassa 2"},
        {id:3,Name:"Kassa 3"},
    ]}, action) {
    switch (action.type) {
        case 'addKassa':
            let kassalar =state.kassalar
            action.payload.id=kassalar.length+1
            kassalar.push(action.payload)
            return {...state,kassalar}
        case 'deleteKassa':
            let filter =state.kassalar.filter((item)=>{
                return item.id!==action.payload
            })
            return {...state,kassalar:filter}
        case 'changeKassa':
            let a =state.kassalar.map((item)=>{
                if(item.id===action.payload.id){
                    return  state.kassalar[action.payload.id-1]=action.payload;
                }
                return item
            })
            return {...state,kassalar:a}
        default:
            return state
    }
}