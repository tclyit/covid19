import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

export default function DataLoader(props) {
    // const [open, setOpen] = React.useState(props.open);
    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer,
            color: '#fff',
            position: 'absolute'
        },
    }));
    // const handleClose = () => {
    //     setOpen(false);
    // };
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={props.open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}