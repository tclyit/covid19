import React from 'react';
import PropTypes from 'prop-types';
// used for scroll to top
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    scrollTotop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabButton: {
        backgroundColor: '#b11890',
        color: '#fff'
    }
}));

export default function ScrollTop(props) {
    const { /* children, */ scrollTopId, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(`#${scrollTopId}`);

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <CssBaseline />
            <Zoom in={trigger}>
                <div onClick={handleClick} role="presentation" className={classes.scrollTotop}>
                    <Fab className={classes.fabButton} color="primary" size="small" aria-label="Scroll back to top" title="Scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </div>
            </Zoom>
        </>
    );
}

ScrollTop.propTypes = {
    /* children: PropTypes.element.isRequired, */ // if you use `children`
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    scrollTopId: PropTypes.string.isRequired,
    window: PropTypes.func,
};