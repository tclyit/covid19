import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

export default function ProvinceItemDetails(data) {
  const classes = useStyles();
  const itemData = data.data;
  return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="textSecondary" align="left">Total Cases:<span style={{marginLeft: '3.4em', fontWeight: 'bold'}}>{itemData.totalCases}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Today Cases:<span style={{marginLeft: '3em', fontWeight: 'bold'}}>{itemData.todayCases}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Confirmed Cases:<span style={{marginLeft: '1em', fontWeight: 'bold'}}>{itemData.confirmed}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Presumptive:<span style={{marginLeft: '3em', fontWeight: 'bold'}}>{itemData.presumptive}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Active:<span style={{marginLeft: '5.8em', fontWeight: 'bold'}}>{itemData.active}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Recovered:<span style={{marginLeft: '4em', fontWeight: 'bold'}}>{itemData.recovered}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Deaths:<span style={{marginLeft: '5.5em', fontWeight: 'bold'}}>{itemData.deaths}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Test Administered:<span style={{marginLeft: '0.5em', fontWeight: 'bold'}}>{itemData.testAdministered}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Test Negative:<span style={{marginLeft: '2.5em', fontWeight: 'bold'}}>{itemData.testNegative}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Test Pending:<span style={{marginLeft: '2.8em', fontWeight: 'bold'}}>{itemData.testPending}</span></Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}