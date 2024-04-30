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

export default orderPagination;
