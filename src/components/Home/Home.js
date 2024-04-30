import React from "react";
import { Container } from "react-bootstrap";
import DefaultDropdown from "../core/dropdown";
import DefaultPagination from "../core/pagination";
import DataTable from "../core/table";
import { useHomeViewModel } from "./HomeViewModel";


function Home() {
  const {
    selectTables,
    selectPageSizes,
    currentHeader,
    currentData,
    currentPageSize,
    startEndPage,
    handleDropdownChange,
    handlePageSizeChange,
  } = useHomeViewModel();

  return (
    <section className="vh-100 d-flex flex-column align-items-center justify-content-center">

      <Container id="home">
        <div className="d-flex justify-content-start mb-4">
          <DefaultDropdown
            options={selectTables}
            onChange={handleDropdownChange}
            defaultOption={selectTables[0]}
          ></DefaultDropdown>
        </div>
        <DataTable data={currentData} headers={currentHeader}></DataTable>
        <div className="d-flex justify-content-between align-items-center">
          <DefaultPagination
            onChange={handlePageSizeChange}
            startPage={startEndPage[0]}
            endPage={startEndPage[1]}
          ></DefaultPagination>
          <DefaultDropdown
            options={selectPageSizes}
            onChange={handlePageSizeChange}
            defaultOption={currentPageSize}
            label={"Items per page"}
          ></DefaultDropdown>
        </div>

      </Container>
    
      
    </section>
  );
}

export default Home;
