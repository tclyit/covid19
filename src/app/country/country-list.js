import React, { useState } from 'react';
import MaterialTable from 'material-table';
import CountryListItemDetails from './country-list-item-details';
import DataLoader from '../shared/loader/data-loader';

export default function CountryList(props) {
  const openLoader = props.data ? false : true;
  const [state, setState] = useState({
    selectedRow: null
  });
  return (
    <>
      <MaterialTable
        title="search:"
        columns={[
          { title: 'Country', field: 'country' },
          { title: 'Cases', field: 'cases' },
          {
            title: 'Today Cases',
            field: 'todayCases',
            cellStyle: {
              backgroundColor: '#9604f10d',
              color: '#360279'
            },
            headerStyle: {
              backgroundColor: '#9604f138',
            }
          },
          { title: 'Deaths', field: 'deaths' },
          {
            title: 'Today Deaths',
            field: 'todayDeaths',
            cellStyle: {
              backgroundColor: '#f1040414',
              color: '#f00000'
            },
            headerStyle: {
              backgroundColor: '#f1040430',
            }
          },
          { title: 'Recovered', field: 'recovered' },
          {
            title: 'Active',
            field: 'active',
            cellStyle: {
              backgroundColor: '#04f14d14',
              color: '#003e11'
            },
            headerStyle: {
              backgroundColor: '#04f14d59',
            }
          },
          { title: 'Critical', field: 'critical' },
          {
            title: 'First Case',
            field: 'firstCase',
            cellStyle: {
              backgroundColor: '#5d0e5b36',
              color: '#65034fbf'
            },
            headerStyle: {
              backgroundColor: '#5d0e5b54',
            }
          },
          { title: 'Case / 1M pop', field: 'casesPerOneMillion' },
          { title: 'Deaths / 1M pop', field: 'deathsPerOneMillion' },
          { title: 'Total Tests', field: 'totalTests' },
          { title: 'Tests / 1M pop', field: 'testsPerOneMillion' },
        ]}
        data={props.data ? props.data : []}
        options={{
          search: true,
          searchFieldAlignment: 'left',
          exportButton: true,
          pageSizeOptions: [5, 10, 20, 100, 200],
          rowStyle: rowData => ({
            backgroundColor: (state.selectedRow && state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
          })
        }}
        onRowClick={((evt, selectedRow, togglePanel) => { setState({ selectedRow }); togglePanel(); })}
        detailPanel={[
          {
            tooltip: 'Show All',
            render: rowData => {
              return (
                <CountryListItemDetails data={rowData} />
              );
            },
          }
        ]}
      />
      <DataLoader open={openLoader} />
    </>
  );
}
