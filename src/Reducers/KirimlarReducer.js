import {createAction} from "@reduxjs/toolkit";

export const addKirim = createAction("addKirim")
export const deleteKirim = createAction("deleteKirim")
export const changeKirim = createAction("changeKirim")


export default function KirimlarReducer(state = {
    kirimlar: [
        {id: 1, nameID: "Abdulloh", Miqdori: 2000, kassaID: "Kassa 2", vaqt: "2022-12-03"},
        {id: 2, nameID: "Elyor", Miqdori: 3000, kassaID: "Kassa 1", vaqt: "2022-08-20"},
        {id: 3, nameID: "Maqsud", Miqdori: 10000, kassaID: "Kassa 1", vaqt: "2022-12-04"},
        {id: 4, nameID: "Elyor", Miqdori: 20000, kassaID: "Kassa 3", vaqt: "2022-12-07"},
        {id: 5, nameID: "Abdulloh", Miqdori: 18000, kassaID: "Kassa 2", vaqt: "2022-12-12"},
        {id: 6, nameID: "Maqsud", Miqdori: 8000, kassaID: "Kassa 3", vaqt: "2022-12-09"},

    ]
}, action) {
    switch (action.type) {
        case 'addKirim':
            let kirimlar = state.kirimlar
            action.payload.id = kirimlar.length + 1
            kirimlar.push(action.payload)
            return {...state, kirimlar}
        case 'deleteKirim':
            let filter = state.kirimlar.filter((item) => {
                return item.id !== action.payload
            })
            return {...state, kirimlar: filter}
        case 'changeKirim':
            let a = state.kirimlar.map((item) => {
                if (item.id === action.payload.id) {
                    return state.kirimlar[action.payload.id - 1] = action.payload;
                }
                return item
            })
            return {...state, kirimlar: a}
        default:
            return state
    }
}