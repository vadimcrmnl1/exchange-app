import React from 'react';
import {selectFirstCurrency, selectSecondCurrency} from "../../../features/Currencies/currencies-selectors";
import {useAppSelector} from "../../../hooks/hooks";
import s from './Header.module.css'

export const Header = () => {
    const firstCurrency = useAppSelector(selectFirstCurrency)
    const secondCurrency = useAppSelector(selectSecondCurrency)

    return (
        <div className={s.header_container}>
            <div className={s.desc_block}>
                <div>Check currency ratios</div>
                {firstCurrency || secondCurrency
                    ? <div className={s.currBlock}>
                        <div>{firstCurrency}</div>
                        <div>=</div>
                        <div>{secondCurrency}</div>
                    </div>
                    : ''}
                <div>Data available for 161 currencies</div>
            </div>
        </div>
    );
};

