import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import {selectIsLoading} from "../../../app/app-selectors";
import {useAppSelector} from "../../../hooks/hooks";

export const SimpleBackdrop = () => {
    const isLoading = useAppSelector(selectIsLoading)

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
