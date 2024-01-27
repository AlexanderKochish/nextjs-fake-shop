import { createSlice } from "@reduxjs/toolkit";

type ISearch = {
    search?: string;
    categoryString?: string;
}

const initialState: ISearch = {
    search: '',
    categoryString: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchString(state, action){
            state.search = action.payload
        },
        setCategoryString(state, action){
            state.categoryString = action.payload
        }
    }
})

export const { setSearchString, setCategoryString } = searchSlice.actions

export default searchSlice.reducer