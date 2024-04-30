import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const DefaultPagination = ({startPage,endPage}) => {
  const [active, setActive] = useState(1); 

  const handlePageChange = (number) => {
    setActive(number); // Update active page state when a page is clicked
  };
  let items = [];
  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <Pagination.Item onClick={() => handlePageChange(number)} key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination  className="custom-pagination mt-6">{items}</Pagination>{" "}
      {/* Apply custom CSS class */}
    </div>
  );

  return paginationBasic;
};

export default DefaultPagination;
