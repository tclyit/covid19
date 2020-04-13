import React from 'react';
// redux
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import WorldItemDetials from './world-item-details';
import TodayTabs from './today-tabs';
import Tooltip from '../tooltips/tooltip';

export default function World() {
    const { world, countryTodayCases, countryTodayDeaths } = useSelector(state => state.loadDataReducer);
    const todayCases = countryTodayCases && countryTodayCases.sort((a,b) => (a.todayCases > b.todayCases) ? -1 : ((b.todayCases > a.todayCases) ? 1 : 0));
    const todayDeaths = countryTodayDeaths && countryTodayDeaths.sort((a,b) => (a.todayDeaths > b.todayDeaths) ? -1 : ((b.todayDeaths > a.todayDeaths) ? 1 : 0));
    const todayData = { todayCases, todayDeaths };
    return (
      <div>
        <Typography variant="h5" component="h5" gutterBottom>
          Covid19 - World 2020
          <Tooltip text="This data is scraped from <a href='https://www.worldometers.info/coronavirus/' target='_blank'>worlddometer website</a>" color="#d688ba" />
        </Typography>
        <WorldItemDetials data={world} />
        <br />
        <Typography variant="h5" component="h5" gutterBottom>
          Today Top Hits:
        </Typography>
        <TodayTabs data={todayData} />
      </div>
    );
}
