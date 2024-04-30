import React from "react";
import { Table } from "react-bootstrap";

const DataTable = ({ headers, data }) => {
  return (
    data &&
    data.length > 0 && (
      <div className="table-responsive">
        <Table borderless striped bordered hover variant="dark" responsive="sm">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={`TableHeader${index}`} className="text-sm">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={`TableRow${index}`}>
                {Object.keys(item).map((key, index) => (
                  <td key={`TableKey${index}`} className="text-sm">
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  );
};

export default DataTable;
