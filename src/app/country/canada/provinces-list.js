
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Typography from '@material-ui/core/Typography';
import ProvinceItemDetails from './province-item-details';
import DataLoader from '../../shared/loader/data-loader';

export default function CanadaProvinces(props) {
  const openLoader = props && props.data && props.data.length > 0 ? false : true;
  const data = props && props.data && props.data.sort((a,b) => (a.totalCases > b.totalCases) ? -1 : ((b.totalCases > a.totalCases) ? 1 : 0));
  const [state, setState] = useState({
    selectedRow: null
  });
  return (
    <>
      <Typography variant="h5" component="h5" gutterBottom>All Provinces</Typography>
      <MaterialTable
        title="search:"
        columns={[
          { title: 'Province', field: 'provinceName' },
          { title: 'Total Cases', field: 'totalCases' },
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
          {
            title: 'Confirmed',
            field: 'confirmed',
            cellStyle: {
              backgroundColor: '#41089c0d',
              color: '#360279'
            },
            headerStyle: {
              backgroundColor: '#a461ce38',
            }
          },
          { title: 'Presumptive', field: 'presumptive' },
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
          { title: 'Recovered', field: 'recovered' },
          {
            title: 'Deaths',
            field: 'deaths',
            cellStyle: {
              backgroundColor: '#f1040414',
              color: '#f00000'
            },
            headerStyle: {
              backgroundColor: '#f1040430',
            }
          },
          { title: 'Test Administered', field: 'testAdministered' },
          { title: 'Test Negative', field: 'testNegative' },
          { title: 'Test Pending', field: 'testPending' },
        ]}
        data={data ? data : []}
        options={{
          search: true,
          searchFieldAlignment: 'left',
          exportButton: true,
          pageSize: 13,
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
                <ProvinceItemDetails data={rowData} />
              );
            },
          }
        ]}
      />
      <DataLoader open={openLoader} />
    </>
  );
}
