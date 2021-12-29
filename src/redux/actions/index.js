import axios from "axios";
import {
  CANCEL,
  CREATE_URL,
  DELETE,
  ERROR,
  FIND_ONE,
  GET_DATA,
  LOADING,
  UPDATE,
} from "../types";

// Loader
export const loadingAct = isLoading => {
  return dispatch => {
    dispatch({ type: LOADING, payload: isLoading });
  };
};

// Fetching data
export const getData = () => {
  return async dispatch => {
    dispatch(loadingAct(true));
    await axios
      .post("https://lzgdu.sse.codesandbox.io/api/all", {})
      .then(res => {
        dispatch({ type: GET_DATA, payload: res.data });
        dispatch(loadingAct(false));
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response });
        dispatch(loadingAct(false));
      });
  };
};

// Create data
export const create = (title, url, history) => {
  return async dispatch => {
    dispatch(loadingAct(true));
    await axios
      .post("https://lzgdu.sse.codesandbox.io/api/url", {
        title: title,
        url: url,
      })
      .then(res => {
        // dispatch({ type: CREATE_URL, payload: res.data });
        history.push("/");
        dispatch(loadingAct(false));
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response });
        dispatch(loadingAct(false));
      });
  };
};

// Finding data
export const findOne = (id, history) => {
  return async dispatch => {
    dispatch(loadingAct(true));
    await axios
      .post(`https://lzgdu.sse.codesandbox.io/api/${id}`, {})
      .then(res => {
        dispatch({ type: FIND_ONE, payload: res.data });
        history.push(`/edit/${id}`);
        dispatch(loadingAct(false));
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response });
        dispatch(loadingAct(false));
      });
  };
};

// Updating data
export const update = (id, title, url, history) => {
  return async dispatch => {
    dispatch(loadingAct(true));
    await axios
      .post(`https://lzgdu.sse.codesandbox.io/api/update/${id}`, {
        title: title,
        url: url,
      })
      .then(res => {
        // dispatch({ type: UPDATE, payload: res.data });
        history.push(`/`);
        dispatch(loadingAct(false));
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response });
        dispatch(loadingAct(false));
      });
  };
};

// Deleting data
export const deleteUrl = id => {
  return async dispatch => {
    dispatch(loadingAct(true));
    await axios
      .post(`https://lzgdu.sse.codesandbox.io/api/delete/${id}`, {})
      .then(res => {
        // dispatch({ type: DELETE, payload: res.data });
        dispatch(getData());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response });
        dispatch(loadingAct(false));
      });
  };
};

// Input box clear
export const cancel = () => {
  return {
    type: CANCEL,
    payload: null,
  };
};
