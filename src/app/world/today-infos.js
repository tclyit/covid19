import React, { useState } from 'react';
import MaterialTable from 'material-table';
import DataLoader from '../shared/loader/data-loader';

export default function WorldTodayInfo(props) {
  const openLoader = props.data ? false : true;
  const [state, setState] = useState({
    selectedRow: null
  });
  return (
    <>
      <MaterialTable
        title="search:"
        columns={[
          {
            title: 'Country',
            field: 'country',
            headerStyle: {
              backgroundColor: '#e8e5e5b5',
            }
          },
          {
            title: (props.index === 0) ? 'Cases' : 'Deaths',
            field: (props.index === 0) ? 'todayCases' : 'todayDeaths',
            cellStyle: {
              backgroundColor: (props.index === 0) ? '#9604f10d' : '#f1040414',
              color: (props.index === 0) ? '#360279' : '#f00000'
            },
            headerStyle: {
              backgroundColor: (props.index === 0) ? '#9604f138' : '#f1040430',
            }
          },
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
        onRowClick={((evt, selectedRow) => { setState({ selectedRow }); })}
      />
      <DataLoader open={openLoader} />
    </>
  );
}
