import React from 'react';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

export default function CanadaFlagIcon() {
    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        imageIcon: {
            height: '.4em',
            width: '.8em'
        },
        iconRoot: {
            textAlign: 'center',
            lineHeight: '.45em'
        },
    });
    const classes = useStyles();
    return (
        <Icon classes={{ root: classes.iconRoot }}>
            <img alt="Canada" className={classes.imageIcon} src="/images/svg/canada-flag.svg" />
        </Icon>
    );
}