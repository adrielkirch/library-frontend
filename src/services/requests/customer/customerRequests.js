import get  from "../get";

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

export default customerPagination;
