import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';

export default function Tooltip(props) {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            width: 0,
            minWidth: 0,
            height: 0,
            lineHeight: 0,
            padding: 0,
            letterSpacing: 0,
            fontSize: 0,
            verticalAlign: 'inherit',
            display: 'inline-block',
            color: props.color ? props.color : '#76b7b1'
        },
    }));
    const classes = useStyles();
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <>
                    <Button variant="contained" className={classes.button} startIcon={<InfoIcon />} {...bindTrigger(popupState)}>&nbsp;</Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Box p={2}>
                            <div dangerouslySetInnerHTML={{__html: props.text}}></div>
                        </Box>
                    </Popover>
                </>
            )}
        </PopupState>
    );
}