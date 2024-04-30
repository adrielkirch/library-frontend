import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const DefaultPagination = ({ page, startPage, lastPage, onChange }) => {
  const [active, setActive] = useState(page);

  let items = [];
  for (let number = startPage; number <= lastPage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          onChange(number);
          setActive(number);
        }}
        key={`changePage${number}`}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination className="custom-pagination mt-6">{items}</Pagination>{" "}
    </div>
  );

  return paginationBasic;
};

export default DefaultPagination;
