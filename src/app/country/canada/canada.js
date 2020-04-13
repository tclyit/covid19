import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CrossCountry from './cross-country-list';
import CanadaProvinces from './provinces-list';
import CanadaFlagIcon from '../../shared/canada-flag-icon';
import Tooltip from '../../tooltips/tooltip';

export default function CanadaCountry(props) {
  const { country, province } = useSelector(state => state.loadCanadaDataReducer);
  return (
    <>
      <Typography variant="h5" component="h5" gutterBottom>Canada <CanadaFlagIcon /><Tooltip text="This data is scraped from <a href='https://www.ctvnews.ca/health/coronavirus/tracking-every-case-of-covid-19-in-canada-1.4852102' target='_blank'>CTV News website.</a>" /></Typography>
      <div style={{ position: "relative" }}>
        <CrossCountry data={country} />
      </div>
      <br />
      <div style={{ position: "relative" }}>
        <CanadaProvinces data={province} />
      </div>
    </>
  );
}
