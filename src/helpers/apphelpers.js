import axios from "axios";
import { SUCCESS_RESPONSE } from '../constants/constants';

export const appHelpers={
    postRequest,
    getRequest,
    formatPromiseResponse,
    interpretErrorResponse
}

function postRequest(url, payload, header){
    let reqHeader = header ? header : { "Content-Type": "application/json" };
    let config = { headers: reqHeader };
    return axios.post(url, payload, config);
}

function getRequest (url, header){
    let reqHeader = header ? header : { "Content-Type": "application/json" };
    let config = { headers: reqHeader };
    return axios
        .get(url, config)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err
        });
}

function formatPromiseResponse (res, resType) {
    let responseType = (resType === undefined ? SUCCESS_RESPONSE : resType);
    return { status: responseType, response: res };
}

function interpretErrorResponse(error) {
    let errorMessage = "";
    if (error.response === undefined) {
      errorMessage = "Please check your internet connectivity!";
    } 
    else {
      errorMessage = error.response.data
        ? (error.response.data.message) ? error.response.data.message : error.response.data
        : "Unable to handle request";
    }
    if (typeof errorMessage === "string") {
      return errorMessage;
    } else {
      return "Something went wrong!";
    }
  }