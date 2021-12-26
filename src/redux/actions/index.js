import axios from "axios";
import { CANCEL, CREATE_URL, DELETE, ERROR, FIND_ONE, GET_DATA } from "../types";

export const getData = () => {
  return async (dispatch) => {
    await axios
      .post("https://lzgdu.sse.codesandbox.io/api/all", {})
      .then((res) => {
        dispatch({ type: GET_DATA, payload: res.data });
        console.log("res", res.data);
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err.response });
        console.log("err", err.response);
      });
  };
};

export const create = (title, url, history) => {
  return async (dispatch) => {
    await axios
      .post("https://lzgdu.sse.codesandbox.io/api/url", {
        title: title,
        url: url,
      })
      .then((res) => {
        dispatch({ type: CREATE_URL, payload: res.data });
        console.log("res", res.data);
        history.push("/");
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err.response });
        console.log("err", err.response);
      });
  };
};
export const findOne = (id, history) => {
  return async (dispatch) => {
    await axios
      .post(`https://lzgdu.sse.codesandbox.io/api/${id}`, {})
      .then((res) => {
        dispatch({ type: FIND_ONE, payload: res.data });
        console.log("res", res.data);
        history.push(`/edit/${id}`);
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err.response });
        console.log("err", err.response);
      });
  };
};
export const update = (id, title, url, history) => {
  return async (dispatch) => {
    await axios
      .post(`https://lzgdu.sse.codesandbox.io/api/update/${id}`, {
        title: title,
        url: url,
      })
      .then((res) => {
        dispatch({ type: FIND_ONE, payload: res.data });
        console.log("res", res.data);
        history.push(`/`);
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err.response });
        console.log("err", err.response);
      });
  };
};
export const deleteUrl = (id) => {
  return async (dispatch) => {
    await axios
      .post(`https://lzgdu.sse.codesandbox.io/api/delete/${id}`, {})
      .then((res) => {
        dispatch({ type: DELETE, payload: res.data });
        console.log("res", res);
      })
      .catch((err) => {
        dispatch({ type: DELETE, payload: err.response });
        console.log("err", err.response);
      });
  };
};
export const cancel = () => {
  return {
    type: CANCEL,
    payload:null
  };
};
