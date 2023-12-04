import React from 'react';
import {Currency} from "../../common/components/Currency/Currency";
import {SelectComponent} from "../../common/components/Select/Select";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {currencyActions, currencyThunks} from "./currencies-reducer";
import {selectExchangeCurrency, selectFirstCurrency} from "./currencies-selectors";
import s from './Currencies.module.css'

export const Currencies = () => {
    const dispatch = useAppDispatch()
    const firstCurrency = useAppSelector(selectFirstCurrency)
    const exchangeCurrency = useAppSelector(selectExchangeCurrency)

    const handleCheckCurrency = () => {
        dispatch(currencyThunks.fetchCurrencies(firstCurrency))
    }
    const handleResetCurrencies = () => {
        dispatch(currencyActions.resetCurrencies({exchange: {}, firstCurrency: '', secondCurrency: ''}))
    }

    return (
        <div className={s.container}>
            <div className={s.selectBlock}>
                <SelectComponent type={'first'}/>
                <SelectComponent type={'second'}/>
            </div>
            <div className={s.btnContainer}>
                <button className={!firstCurrency ? s.btnDisabled : s.btn} disabled={!firstCurrency}
                        onClick={handleCheckCurrency}>CHECK
                </button>
                <button className={!firstCurrency ? s.btnDisabled : s.btn} disabled={!firstCurrency}
                        onClick={handleResetCurrencies}>RESET
                </button>
            </div>
            {exchangeCurrency && <div>
                <Currency currency={exchangeCurrency}/>
            </div>}
        </div>
    );
};

