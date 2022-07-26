import { createSlice } from "@reduxjs/toolkit"

 const catSlice = createSlice({
    name : 'catSlice', 
    initialState:{
        cat:[], 
        isLoading: false
    },
    reducers : {
        getCatFetch : ( state) =>{
            state.isLoading = true
        }, 
        getCatSuccess : (state, action)=>{
            state.cat = action.payload
            state.isLoading = false
        }, 
        getcatFailure :(state)=>{
            state.isLoading = false
        }
    }
})


export const { getCatFetch , getCatSuccess ,getcatFailure} = catSlice.actions
export default catSlice.reducer