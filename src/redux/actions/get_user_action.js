import axios from "axios";
import { apiBaseUrl } from "../../variables";
import { ERROR, GET_USER } from "../types";

export const getUserAction =  () => {
  return async (dispatch) => {
    console.log(JSON.stringify(`Bearer ${localStorage.getItem("userToken")}`));
    await axios
      .post(`${apiBaseUrl}/me`,null, {headers:{"Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQwOGI5NzNjZjg1MTAwOGQ1YjljYzUiLCJwcml2YXRlIjp0cnVlLCJpYXQiOjE3MTY5OTU0NDUsImV4cCI6MTcxNzE2ODI0NX0.YGbKXbezWcGhEBsxn3ytklYjl5BEQG7qdEOrXoAvuWU`}})
    //   .post(`${apiBaseUrl}/me`, {headers:{"Authorization":`Bearer ${localStorage.getItem("userToken")}`}})
      .then((response) => {
        console.log(response.data);
        dispatch({ type: GET_USER, payload: response.data });
      })
      .catch((err) => {
        console.log("errr",err.response.data?.message);
        if(err.response.data?.message==="unAuthorized"){
            localStorage.removeItem("userToken")
            window.location.href="/login"
        }
        dispatch({ type: ERROR, payload: err.response });
      });
  };
};
