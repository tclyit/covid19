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

export default function CountryItemDetails(data) {
  const classes = useStyles();
  const itemData = data.data;
  return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" color="textSecondary" align="left">Total Cases:<span style={{marginLeft: '0.2em', fontWeight: 'bold'}}>{itemData.totalCases}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">New Cases:<span style={{marginLeft: '0.4em', fontWeight: 'bold'}}>{itemData.newCases}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Active:<span style={{marginLeft: '2.7em', fontWeight: 'bold'}}>{itemData.active}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Recovered:<span style={{marginLeft: '0.9em', fontWeight: 'bold'}}>{itemData.recovered}</span></Typography>
                <Typography variant="h5" color="textSecondary" align="left">Deaths:<span style={{marginLeft: '2.4em', fontWeight: 'bold'}}>{itemData.deaths}</span></Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}