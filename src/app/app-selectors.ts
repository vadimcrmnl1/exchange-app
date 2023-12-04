import {RootStateType} from "./store";

export const selectIsLoading = (state: RootStateType) => state.app.isLoading
export const selectCurrency = (state: RootStateType) => state.app.currency
