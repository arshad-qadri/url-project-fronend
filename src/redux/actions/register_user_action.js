import axios from "axios";
import { apiBaseUrl } from "../../variables";

export const register_action = (data) => {
  return async (dispatch) => {
    await axios
      .post(`${apiBaseUrl}/register`, {
        name: "text",
        email: "text@gmail.com",
        password: "123",
        repeat_password: "123",
      })
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log("Error", err.response);
      });
  };
};
