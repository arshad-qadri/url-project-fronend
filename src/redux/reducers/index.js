import {  FIND_ONE, GET_DATA } from "../types";

const initState = {
  data: null,
  error: null,
  find: null,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FIND_ONE:
      return {
        ...state,
        find: action.payload,
        error: null,
      };
    case FIND_ONE:
      return {
        ...state,
        find: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducers;
