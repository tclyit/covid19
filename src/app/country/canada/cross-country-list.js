import React, { useState } from 'react';
import MaterialTable from 'material-table';
import CountryItemDetails from './country-item-details';
import DataLoader from '../../shared/loader/data-loader';

export default function CrossCountry(props) {
  const openLoader = props && props.data && props.data.length > 0 ? false : true;
  const [state, setState] = useState({
    selectedRow: null
  });
  return (
    <>
      <MaterialTable
        title="Cross country"
        columns={[
          { title: 'Total Cases', field: 'totalCases' },
          {
            title: 'New Cases',
            field: 'newCases',
            cellStyle: {
              backgroundColor: '#9604f10d',
              color: '#360279'
            },
            headerStyle: {
              backgroundColor: '#9604f138',
            }
          },
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
        ]}
        data={props.data ? props.data : []}
        options={{
          search: false,
          exportButton: true,
          pageSize: 1,
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
                <CountryItemDetails data={rowData} />
              );
            },
          }
        ]}
      />
      <DataLoader open={openLoader} />
    </>
  );
}
