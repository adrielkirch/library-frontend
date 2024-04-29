import React, { useState } from "react";

const customerHeaders = [
  { label: "#", key: "customer_id" },
  { label: "Name", key: "name" },
  { label: "E-mail", key: "email" },
  { label: "Address", key: "address" },
];

const orderHeaders = [
  { label: "#", key: "order_id" },
  { label: "Customer Id", key: "customer_id" },
  { label: "Date", key: "order_date" },
];
const selectTables = ["Customers", "Orders"];

const selectPageSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function useHomeViewModel() {
  const [currentHeader, setCurrentHeader] = useState([...customerHeaders]);
  const [selectedTable, setSelectedTable] = useState("Customers");

  const [customers, setCustomers] = useState([
    {
      customer_id: "065b20eb-22d7-4302-8f09-dc66e455c29a",
      name: "Customer 1",
      email: "customer1@example.com",
      address: "123 Main St",
    },
  ]);

  const [orders, setOrders] = useState([
    {
      order_id: "c5c937e6-8e05-4954-bb60-de3b1d36de00",
      customer_id: "065b20eb-22d7-4302-8f09-dc66e455c29a",
      order_date: "2024-04-29",
    },
  ]);

  const [currentData, setCurrentData] = useState([...customers]);

  const handleDropdownChange = (value) => {
    setSelectedTable(value);
    if (value === "Customers") {
      setCurrentData([...customers]);
      setCurrentHeader([...customerHeaders]);
    } else if (value === "Orders") {
      setCurrentData([...orders]);
      setCurrentHeader([...orderHeaders]);
    }
  };

  return {
    customers,
    orders,
    customerHeaders,
    orderHeaders,
    selectTables,
    selectPageSizes,
    currentData,
    currentHeader,
    handleDropdownChange,
  };
}
