import { CREATE_URL } from "../types";

const initState = {
  data: null,
  error: null,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case CREATE_URL:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default reducers;
