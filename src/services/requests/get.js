import axios from "axios";
import apiConstants from "../../constants/apiConstants";

const get = async (endpoint, queries) => {
  try {
    const baseUrl = apiConstants.baseUrl;
    let url = baseUrl + endpoint + "?";

    for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      url += `${query["property"]}=${query["value"]}`;

      if (i + 1 !== queries.length) {
        url += "&";
      }
    }

    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default get;
