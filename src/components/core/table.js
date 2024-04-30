import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = ({ headers, data }) => {
  return data && data.length > 0 && (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={`TableHeader${index}`}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={`TableRow${index}`}>
            {Object.keys(item).map((key, index) => (
              <td key={`TableKey${index}`}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
