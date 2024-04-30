import get from "../get";

const customerPagination = async (page, limit) => {
  try {
    const endpoint = "/customer";
    const queries = [
      {
        property: "page",
        value: page,
      },
      {
        property: "limit",
        value: limit,
      },
    ];
    const data = await get(endpoint, queries);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const customerSearch = async (page, limit, value) => {
  try {
    const endpoint = "/customer/search";
    const queries = [
      {
        property: "page",
        value: page,
      },
      {
        property: "limit",
        value: limit,
      },
      {
        property: "value",
          value: encodeURIComponent(value)
      },
    ];
    const data = await get(endpoint, queries);
    return data;
  } catch (err) {
   console.log(err);
  }
};

export { customerPagination, customerSearch };
