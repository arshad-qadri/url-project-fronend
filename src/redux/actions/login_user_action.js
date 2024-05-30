import axios from "axios";
import { ERROR, LOGIN_USER } from "../types";
import { loadingAct } from ".";

export const login_action = ({email,password,router}) => {
  return async (dispatch) => {
    dispatch(loadingAct(true));
    await axios
      .post("https://urlsource-backend.vercel.app/api/login", {
        email,
        password
      })
      .then((res) => {
        dispatch({ type: LOGIN_USER, payload: res.data });
        dispatch(loadingAct(false));
        localStorage.setItem("userToken",res.data?.access_token)
        console.log("1111======");
        router.push("/")
      })
      .catch((err) => {
        console.log("Error", err.response);
        dispatch({ type: ERROR, payload: err.response });
        dispatch(loadingAct(false));
      });
  };
};

export const alreadyLoggedIn_action = (token)=>{
  return dispatch =>{
    dispatch({ type: LOGIN_USER, payload:token})
  }
}
