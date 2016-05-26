import React, { PropTypes } from 'react';
import ReactTable from '../../../../node_modules/react-bootstrap/lib/Table';

function getTableHeader(tableHeaders) {
  return tableHeaders === undefined ?
    undefined : tableHeaders.map((header) => (<th>{header}</th>));
}

function getProps(data) {
  const props = [];
  for (const key in data) {
    if (data[key] !== undefined) {
      props.push(data[key]);
    }
  }

  return props;
}

function getTableData(tableData) {
  return tableData === undefined ?
    undefined :
    tableData.map((item, index) => (
      <tr>
        <td>{index}</td>
        {getProps(item).map((data) => (
          <td>{data}</td>
        ))}
      </tr>
    ));
}

function Table({ headers, data }) {
  return (
    <ReactTable striped bordered hover>
      <thead>
      <tr>
        {getTableHeader(headers)}
      </tr>
      </thead>
      <tbody>
      {getTableData(data)}
      </tbody>
    </ReactTable>
  );
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastModifyData: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    operation: PropTypes.array.isRequired,
  })).isRequired,
};

export default Table;
