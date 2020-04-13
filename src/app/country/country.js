import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CountryList from './country-list';

export default function Country() {
  const { country } = useSelector(state => state.loadDataReducer);
  return (
    <div>
      <Typography variant="h5" component="h5" gutterBottom>Covid19 - Countries 2020</Typography>
      <p><b><u>Note</u></b>: 0 means no data reported</p>
      <div style={{ position: "relative" }}>
        <CountryList data={country} />
      </div>
    </div>
  );
}
