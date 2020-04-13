import React, { useEffect } from 'react';
import { Switch, Route, NavLink, BrowserRouter } from "react-router-dom";
// redux
import { useDispatch } from 'react-redux';
// actions
import { actions } from './actions/load-data.action';
// axios
import axio from 'axios';
// material ui
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PublicIcon from '@material-ui/icons/Public';
import MapIcon from '@material-ui/icons/Map';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import Typography from '@material-ui/core/Typography';
// components
import World from './world/world';
import Country from './country/country';
import CanadaCountry from './country/canada/canada';
import WorldMap from './map/world-map';
import CanadaFlagIcon from './shared/canada-flag-icon';
import ScrollTop from './shared/scroll-to-top';
// color
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    button: {
        fontSize: '0.9rem',
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 2,
        paddingTop: 2,
        minWidth: 22,
        textTransform: 'none'
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0
    },
    appBar: {
        backgroundColor: '#fff',
    },
    toolBar: {
        minHeight: 40,
        paddingLeft: 2,
        paddingRight: 2
    },
    toolBarMinHeight: {
        minHeight: 12,
    },
    routerActive: {
        fontWeight: 'bold',
        backgroundColor: '#ded7d7bf'
    }
});

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {/* {'Copyright © '} */}
            <a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.dockh.com/?cb=90ds8f">
                Doc KH
        </a>{' '}
            {new Date().getFullYear()}
            {/* {'.'} */}
        </Typography>
    );
}

export default function App(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    // right side drawer
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List key={1} className={classes.list}>
                <ListItem button key={1} component={NavLink} exact to={"/"} activeClassName={classes.routerActive}>
                    <ListItemIcon><PublicIcon style={{ color: green[300] }} /></ListItemIcon>
                    <ListItemText primary="World" />
                </ListItem>
            </List>
            <Divider />
            <List key={2} className={classes.list}>
                <ListItem button key={2} component={NavLink} to={"/countries"} activeClassName={classes.routerActive}>
                    <ListItemIcon><GpsFixedIcon color="secondary" /></ListItemIcon>
                    <ListItemText primary="Countries" />
                </ListItem>
            </List>
            <Divider />
            <List key={3} className={classes.list}>
                <ListItem button key={3} component={NavLink} to={"/canada"} activeClassName={classes.routerActive}>
                    <ListItemIcon><CanadaFlagIcon /></ListItemIcon>
                    <ListItemText primary="Canada" />
                </ListItem>
            </List>
            <Divider />
            <List key={4} className={classes.list}>
                <ListItem button key={4} component={NavLink} to={"/map"} activeClassName={classes.routerActive}>
                    <ListItemIcon><MapIcon color="primary" /></ListItemIcon>
                    <ListItemText primary="Map" />
                </ListItem>
            </List>
            <Divider />
            {/* <List>
                <ListItem button key={6} component={NavLink} to={"/chart"}>
                    <ListItemIcon><InsertChartIcon /></ListItemIcon>
                    <ListItemText primary="Chart" />
                </ListItem>
            </List> */}
        </div>
    );

    // this `hasState` is used to validate for all any other state updated by React.useState()
    const [hasState] = React.useState("");
    // dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        if (!hasState) {
            // dispatch load data action
            dispatch(actions.loadDataAction());
            const timeStamp = Date.now();
            // get world and countries data
            axio.get('https://dockh.com/covid19/world/?cb=' + timeStamp).then(data => {
                const worldData = data.data;
                // dispatch success load data action
                dispatch(actions.loadDataSuccessAction(worldData));
            });
            // get only Canada data
            axio.get('https://dockh.com/covid19/countries/canada?cb=' + timeStamp).then(data => {
                const canadaData = data.data;
                // dispatch success load data action
                dispatch(actions.loadCanadaDataSuccessAction(canadaData));
            });
            // get WORLD Map data
            axio.get('https://dockh.com/covid19/map?cb=' + timeStamp).then(data => {
                const mapData = data.data;
                // dispatch success load data action
                dispatch(actions.loadMapDataSuccessAction(mapData));
            });
        }
    }, [hasState, dispatch]);

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box my={1}>
                    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
                        <AppBar position="sticky" className={classes.appBar}>
                            <Toolbar className={classes.toolBar}>
                                <Button className={classes.button} key={1} onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
                                <Button className={classes.button} key={2} component={NavLink} exact to={"/"} activeClassName={classes.routerActive}><PublicIcon style={{ fontSize: 14, color: green[300] }} /> World</Button>
                                <Button className={classes.button} key={3} component={NavLink} to={"/countries"} activeClassName={classes.routerActive}><GpsFixedIcon style={{ fontSize: 14 }} color="secondary" /> Countries</Button>
                                <Button className={classes.button} key={4} component={NavLink} to={"/canada"} activeClassName={classes.routerActive}><CanadaFlagIcon style={{ fontSize: 14 }} /> Canada</Button>
                                <Button className={classes.button} style={{ minWidth: 50 }} key={5} component={NavLink} to={"/map"} activeClassName={classes.routerActive}><MapIcon style={{ fontSize: 14 }} color="primary" /> Map</Button>
                            </Toolbar>
                        </AppBar>
                        <Toolbar id="back-to-top-anchor" className={classes.toolBarMinHeight}></Toolbar>
                        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                            {sideList('right')}
                        </Drawer>
                        <Switch>
                            <Route exact path="/"><World /></Route>
                            <Route path="/countries"><Country /></Route>
                            <Route path="/canada"><CanadaCountry /></Route>
                            <Route path="/map"><WorldMap /></Route>
                            {/* <Route path="/chart" render={() => <div>I am working on it.</div>} /> */}
                            <Route path="*">Sorry, this page is not found.</Route>
                        </Switch>
                    </BrowserRouter>
                </Box>
                <Typography>&nbsp;</Typography>
                <Copyright />
            </Container>
            <ScrollTop {...props} scrollTopId="back-to-top-anchor" />
        </React.Fragment>
    );
}
