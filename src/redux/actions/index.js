import axios from "axios";
import { CANCEL, CREATE_URL, FIND_ONE, GET_DATA } from "../types";

export const getData = () => {
  return async (dispatch) => {
    await axios
      .post("https://lzgdu.sse.codesandbox.io/api/all")
      .then((res) => {
        dispatch({ type: GET_DATA, payload: res.data });
        console.log("res", res.data);
      })
      .catch((err) => {
        dispatch({ type: GET_DATA, payload: err.response });
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
        dispatch({ type: CREATE_URL, payload: err.response });
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
        dispatch({ type: FIND_ONE, payload: err.response });
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
        dispatch({ type: FIND_ONE, payload: err.response });
        console.log("err", err.response);
      });
  };
};
export const deleteUrl = (id) => {
  return async (dispatch) => {
    await axios
      .post(`https://lzgdu.sse.codesandbox.io/api/delete/${id}`, {})
      .then((res) => {
        // dispatch({ type: FIND_ONE, payload: res.data });
        console.log("res", res);
      })
      .catch((err) => {
        // dispatch({ type: FIND_ONE, payload: err.response });
        console.log("err", err.response);
      });
  };
};
export const cancel = () => {
  return {
    type: CANCEL,
  };
};
