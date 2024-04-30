import get  from "../get";

const orderPagination = async (page, limit) => {
  try {
    const endpoint = "/order";
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

const orderSearch = async (page, limit, value) => {
  try {
    const endpoint = "/order/search";
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
    throw err;
  }
};

export { orderPagination, orderSearch };