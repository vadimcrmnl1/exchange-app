import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: initialStateType = {
    isLoading: false,
    currency: '',
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        isLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
        },
        setCurrency: (state, action: PayloadAction<{currency: string}>) => {
            state.currency = action.payload.currency
        }
    }
})
export const appActions = slice.actions
export const appReducer = slice.reducer

type initialStateType = {
    isLoading: boolean
    currency: string
}
