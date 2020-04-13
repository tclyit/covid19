import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DataSingleSpinner from '../shared/loader/data-single-spinner';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paperCases: {
    position: 'relative',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#9d00ff17'
  },
  paperDeaths: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#ff000017'
  },
  paperRecovered: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#00ff3717'
  },
}));

export default function WorldItemDetails(data) {
  const classes = useStyles();
  const propsData = data.data || {};
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} component={Link} to="/countries" style={{ textDecoration: 'none' }}>
          <Paper className={classes.paperCases}>
            <Typography variant="h3" color="textSecondary" align="center">
              <span style={{ fontSize: '0.5em', fontWeight: 'bold' }}>Cases: </span>{propsData.cases}
              <DataSingleSpinner show={!!propsData.cases} />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} component={Link} to="/countries" style={{ textDecoration: 'none' }}>
          <Paper className={classes.paperDeaths}>
            <Typography variant="h3" color="textSecondary" align="center">
              <span style={{ fontSize: '0.5em', fontWeight: 'bold' }}>Deaths: </span>
              <span style={{ color: '#f00' }}>{propsData.deaths}</span>
              <DataSingleSpinner show={!!propsData.deaths} />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} component={Link} to="/countries" style={{ textDecoration: 'none' }}>
          <Paper className={classes.paperRecovered}>
            <Typography variant="h3" color="textSecondary" align="center">
              <span style={{ fontSize: '0.5em', fontWeight: 'bold' }}>Recovered: </span>{propsData.recovered}
              <DataSingleSpinner show={!!propsData.recovered} />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
