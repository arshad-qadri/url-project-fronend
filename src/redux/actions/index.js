import axios from "axios";
import { CREATE_URL } from "../types";

export const create = () => {
  return async (dispatch) => {
    // type: CREATE_URL,
    // payload: data,
    await axios
      .get("https://lzgdu.sse.codesandbox.io")
      .then((res) => {
        dispatch({ type: CREATE_URL, res });
        console.log("res", res);
      })
      .catch((err) => {
        dispatch({ type: CREATE_URL, payload: err.response });
        console.log("err", err.response);
      });
  };
};
