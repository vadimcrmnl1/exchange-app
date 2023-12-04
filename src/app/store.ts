import {configureStore} from "@reduxjs/toolkit";
import {currencyReducer} from "../features/Currencies/currencies-reducer";
import {appReducer} from "./app-reducer";

export const store = configureStore({
    reducer: {
        app: appReducer,
        curr: currencyReducer
    }
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
