import React from 'react';
import { Link } from "react-router-dom";
import CanadaFlagIcon from '../../shared/canada-flag-icon';

export default function LinkToCanada(props) {
    return(
    <>
        {props && props.text && <span style={{paddingRight: '2px', fontWeight: 'normal'}}>{props.text}</span>}
        <Link style={{color: '#000'}} to="/canada">Canada <CanadaFlagIcon /></Link>
    </>
    );
}