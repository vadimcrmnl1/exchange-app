import React from 'react';
import s from './Header.module.css'

export const Header = () => {

    return (
        <div className={s.header_container}>
            <div className={s.desc_block}>
                <div>Check currency ratios</div>
                <div>Data available for 161 currencies</div>
            </div>
        </div>
    );
};

