import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function DataSingleSpinner(props) {
    const showSpinner = props.show;
    return (
        <>
            {!showSpinner ? <CircularProgress color="inherit" /> : null}
        </>
    );
}