// const BASE_URL = 'http://localhost:5000/api'
const BASE_URL = 'https://lead-management-sustem-8w79.vercel.app/api'

const apiCall = async (
  endpoint,
  method = "GET",
  body = null,
  type = "application/json"
) => {
  // console.log(endpoint);


  try {
    // token from localStorage
    const token = localStorage.getItem("token") || null


    // console.log(token.token);


    // Headers
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    if (type !== "multipart/form-data") {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      {
        method,

        headers,

        body: body
          ? type === "multipart/form-data"
            ? body
            : JSON.stringify(body)
          : null,
      }
    );

    const data = await response.json();

    // console.log("apicall data", data);


    // handle error
    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong"
      );
    }

    return data;

  } catch (error) {

    console.log("apicall error", error);

    return {
      success: false,
      message: error.message,
    };
  }
};

export default apiCall