import { CANCEL, DELETE, ERROR, FIND_ONE, GET_DATA, GET_USER, LOADING, LOGIN_USER } from "../types";

const initState = {
  data: null,
  error: null,
  find: null,
  msg: null,
  loading: false,
  user:null
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

    case LOGIN_USER:{
      return {
        ...state,
        token: action.payload?.access_token,
        error: null,
      };
    }
    case GET_USER:{
      return {
        ...state,
        user: action.payload,
        error: null,
      }
    }
    default:
      return state;
  }
};

export default reducers;
