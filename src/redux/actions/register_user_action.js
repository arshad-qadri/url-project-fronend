import axios from "axios";

export const register_action = (data) => {
  return async (dispatch) => {
    await axios
      .post("https://urlsource-backend.vercel.app/api/register", {
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
