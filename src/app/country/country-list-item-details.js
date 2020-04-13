import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinkToCanada from '../country/canada/link-to-canada';
import Tooltip from '../tooltips/tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    backgroundColor: '#fcfcfc'
  },
}));

export default function CountryListItemDetails(data) {
  const classes = useStyles();
  const itemData = data.data;
  return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="textSecondary" align="left">Cases:<span style={{marginLeft: '4em', fontWeight: 'bold'}}>{itemData.cases}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Today Cases:<span style={{marginLeft: '1em', fontWeight: 'bold'}}>{itemData.todayCases}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Deaths:<span style={{marginLeft: '3.6em', fontWeight: 'bold'}}>{itemData.deaths}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Today Deaths:<span style={{marginLeft: '0.6em', fontWeight: 'bold'}}>{itemData.todayDeaths}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Recovered:<span style={{marginLeft: '2em', fontWeight: 'bold'}}>{itemData.recovered}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Active:<span style={{marginLeft: '4em', fontWeight: 'bold'}}>{itemData.active}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Critical:<span style={{marginLeft: '3.7em', fontWeight: 'bold'}}>{itemData.critical}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">First case:<span style={{marginLeft: '2.4em', fontWeight: 'bold'}}>{itemData.firstCase}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Case/1M pop:<span style={{marginLeft: '0.9em', fontWeight: 'bold'}}>{itemData.casesPerOneMillion}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Deaths/1M pop:<span style={{marginLeft: '0.1em', fontWeight: 'bold'}}>{itemData.deathsPerOneMillion}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Total Tests:<span style={{marginLeft: '2.1em', fontWeight: 'bold'}}>{itemData.totalTests}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Tests/1M pop:<span style={{marginLeft: '0.8em', fontWeight: 'bold'}}>{itemData.testsPerOneMillion}</span></Typography>
                {itemData.country === 'Canada' && <><LinkToCanada text="visit details" /> <Tooltip text="Data about Canada which is more real time data." /></>}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}