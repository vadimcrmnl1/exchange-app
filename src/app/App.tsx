import React from 'react';
import {SimpleBackdrop} from "../common/components/Backdrop/Backdrop";
import {Header} from "../common/components/Header/Header";
import {Currencies} from "../features/Currencies/Currencies";
import {useAppSelector} from "../hooks/hooks";
import {selectIsLoading} from "./app-selectors";
import s from './App.module.css'

export function App() {
    const isLoading = useAppSelector(selectIsLoading)

    return (
        <div className={s.app}>
            <Header/>
            {isLoading && <SimpleBackdrop/>}
            <Currencies/>
        </div>
    );
}

