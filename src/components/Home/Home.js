import React from "react";
import { Container } from "react-bootstrap";
import DefaultDropdown from "../core/dropdown";
import DefaultPagination from "../core/pagination";
import DataTable from "../core/table";
import { useHomeViewModel } from "./HomeViewModel";
import SearchInput from "../core/search";

function Home() {
  const {
    selectTables,
    selectPageSizes,
    currentHeader,
    currentData,
    limit,
    page,
    lastPage,
    handleDropdownChange,
    handlePageSizeChange,
    handlePageChange,
    handleSearchChange
  } = useHomeViewModel();

  return (
    <section className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <Container id="home">
        <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <DefaultDropdown
            options={selectTables}
            onChange={handleDropdownChange}
            defaultOption={selectTables[0]}
          ></DefaultDropdown>
          <div className="mt-4">
            <SearchInput
              onChange={handleSearchChange}
              placeholder={"Search"}
            ></SearchInput>
          </div>
        </div>

        <DataTable data={currentData} headers={currentHeader}></DataTable>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <DefaultPagination
            onChange={handlePageChange}
            startPage={1}
            lastPage={lastPage}
            page={page}
          ></DefaultPagination>
          <DefaultDropdown
            options={selectPageSizes}
            onChange={handlePageSizeChange}
            defaultOption={limit}
            label={"Items per page"}
          ></DefaultDropdown>
        </div>
      </Container>
    </section>
  );
}

export default Home;
