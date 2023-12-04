import React, {ChangeEvent, useEffect, useState} from 'react';
import {ExchangeStateType} from "../../../features/Currencies/currencies-reducer";
import {selectFirstCurrency, selectSecondCurrency} from "../../../features/Currencies/currencies-selectors";
import {useAppSelector} from "../../../hooks/hooks";
import s from './Currency.module.css'

type CurrencyType = {
    currency: ExchangeStateType
}
export const Currency: React.FC<CurrencyType> = ({currency}) => {
    const [value1, setValue1] = useState<number>(1)
    const [value2, setValue2] = useState<number>(1)
    const firstCurrency = useAppSelector(selectFirstCurrency)
    const secondCurrency = useAppSelector(selectSecondCurrency)

    const handleChangeValue1 = (event: ChangeEvent<HTMLInputElement>) => {
        setValue1(+event.currentTarget.value)
    }

    useEffect(() => {
        if (currency.result === 'success') {
            let arr = Object.entries(currency.conversion_rates).filter(el => el.find(el => el === secondCurrency)).map(e => e[1])
            console.log(arr[0])
            setValue2(arr[0])
        }

    }, [secondCurrency, firstCurrency])


    return (
        <div className={s.currencyContainer}>
            <div className={s.currencyBlock}>
                <div>Date: {currency.time_last_update_utc}</div>
                <div>Currency: {currency.base_code}</div>
                <div className={s.inputBlock}>

                        <span>{firstCurrency}</span>
                        <input type={'number'} min={1} value={value1} onChange={handleChangeValue1}/>

                    =

                        {/*<input value={value1 !== 1 ? value1 * value2 : value2}/>*/}
                        <span>{value1 !== 1 ? (value1 * value2).toFixed(4) : value2}</span>
                        {currency.result === 'success' &&
                            <span>{Object.keys(currency.conversion_rates).find(el => el === secondCurrency)}</span>}




                </div>
            </div>


        </div>
    );
};
