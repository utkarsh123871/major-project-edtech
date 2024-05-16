import axios from "axios";

// Create a new Axios instance
export const axiosInstance = axios.create({});

// API Connector function
export const apiConnector = (method, url, bodyData = null, headers = null, params = null) => {
    // Return the promise returned by axiosInstance
    return axiosInstance({
        method: method,
        url: url,
        data: bodyData,
        headers: headers,
        params: params
    })
    .catch(error => {
        // Handle any errors here
        console.error("API Request Failed:", error);
        throw error; // Re-throw the error so that it can be caught further up the chain
    });
};
