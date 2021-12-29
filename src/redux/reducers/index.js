import { CANCEL, DELETE, ERROR, FIND_ONE, GET_DATA, LOADING } from "../types";

const initState = {
  data: null,
  error: null,
  find: null,
  msg: null,
  loading: false,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
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

    case DELETE:
      return {
        ...state,
        msg: action.payload,
        error: null,
      };

    case CANCEL:
      return {
        ...state,
        find: action.payload,
      };

    

    case ERROR: {
      return {
        ...state,
        data: null,
        find: null,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducers;
