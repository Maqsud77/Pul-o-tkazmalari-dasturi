import {createAction} from "@reduxjs/toolkit";
export const addChiqim =createAction("addChiqim")
export const deleteChiqim =createAction("deleteChiqim")
export const changeChiqim =createAction("changeChiqim")
export default function ChiqimlarReducer(state = { chiqimlar:[
        {id:1,nameID:"Maqsud",Miqdori:1000,kassaID:"Kassa 1",vaqt:"2022-05-18"},
        {id:2,nameID:"Elyor",Miqdori:5000,kassaID:"Kassa 3",vaqt:"2022-03-20"},
        {id:3,nameID:"Elyor",Miqdori:3000,kassaID:"Kassa 1",vaqt:"2022-03-20"},
        {id:4,nameID:"Abdulloh",Miqdori:2000,kassaID:"Kassa 2",vaqt:"2022-05-17"},
        {id:5,nameID:"Maqsud",Miqdori:3000,kassaID:"Kassa 2",vaqt:"2022-05-10"},
        {id:6,nameID:"Abdulloh",Miqdori:4000,kassaID:"Kassa 3",vaqt:"2022-03-27"},
    ]}, action) {
    switch (action.type) {
        case 'addChiqim':
            let chiqimlar =state.chiqimlar
            action.payload.id=chiqimlar.length+1
            chiqimlar.push(action.payload)
            return {...state,chiqimlar }
        case 'deleteChiqim':
            let filter =state.chiqimlar.filter((item)=>{
                return item.id!==action.payload
            })
            return {...state,chiqimlar:filter}
        case 'changeChiqim':
            let a =state.chiqimlar.map((item)=>{
                if(item.id===action.payload.id){
                    return  state.chiqimlar[action.payload.id-1]=action.payload;
                }
                return item
            })
            return {...state,chiqimlar:a}
        default:
            return state
    }
}