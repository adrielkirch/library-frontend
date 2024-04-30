import { useState, useEffect } from "react";
import {
  customerPagination,
  customerSearch,
} from "../../services/requests/customer/customerRequests";
import {
  orderPagination,
  orderSearch,
} from "../../services/requests/order/ordersRequests";

const customerHeaders = [
  { label: "#", key: "customer_id" },
  { label: "Name", key: "name" },
  { label: "E-mail", key: "email" },
  { label: "Address", key: "address" },
];

const orderHeaders = [
  { label: "#", key: "order_id" },
  { label: "Customer", key: "customer_name" },
  { label: "E-mail", key: "email" },
  { label: "Address", key: "address" },
  { label: "Book", key: "book_title" },
  { label: "Price", key: "price" },
  { label: "Quantity Available", key: "quantity_available" },
  { label: "Author", key: "author_name" },
  { label: "Quantity Ordered", key: "quantity" },
];

let firstSeach = true;

const selectTables = ["Customers", "Orders"];

const selectPageSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function useHomeViewModel() {
  const [currentHeader, setCurrentHeader] = useState([...customerHeaders]);
  const [selectedTable, setSelectedTable] = useState("Customers");
  const [limit, setLimit] = useState(selectPageSizes[3]);
  const [page, setPage] = useState(1);
  const [lastPage, setlastPage] = useState(1);
  const [search, setSearch] = useState("");
  const [currentData, setCurrentData] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      try {
        if (selectedTable === "Customers") {
          setCurrentHeader([...customerHeaders]);
          const result = await customerPagination(page, limit);
          setCurrentData(result.data);
          setlastPage(result.totalPages);
        } else if (selectedTable === "Orders") {
          setCurrentHeader([...orderHeaders]);
          const result = await orderPagination(page, limit);
          setCurrentData(result.data);
          setlastPage(result.totalPages);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedTable, limit, page]);

  useEffect(() => {
   
    async function fetchData() {
      try {
        if (selectedTable === "Customers") {
          setCurrentHeader([...customerHeaders]);
          const result = await customerSearch(page, limit, search);
          console.log(result);
          setCurrentData(result.data);
          setlastPage(result.totalPages);
        } else if (selectedTable === "Orders") {
          setCurrentHeader([...orderHeaders]);
          const result = await orderSearch(page, limit, search);
          console.log(result);
          setCurrentData(result.data);
          setlastPage(result.totalPages);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [search]);

  const handleDropdownChange = (value) => {
    setSelectedTable(value);
  };

  const handlePageSizeChange = (value) => {
    setLimit(value);
    setPage(1);
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return {
    customerHeaders,
    orderHeaders,
    selectTables,
    selectPageSizes,
    currentData,
    currentHeader,
    limit,
    lastPage,
    page,
    setPage,
    handleDropdownChange,
    handlePageSizeChange,
    handlePageChange,
    handleSearchChange,
  };
}
