import {RootStateType} from "../../app/store";

export const selectFirstCurrency = (state: RootStateType) => state.curr.firstCurrency
export const selectSecondCurrency = (state: RootStateType) => state.curr.secondCurrency
export const selectExchangeCurrency = (state: RootStateType) => state.curr.exchange
