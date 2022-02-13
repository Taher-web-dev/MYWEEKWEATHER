import { START, FAILURE, CONSUMEDATA } from '../Action/action';

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONSUMEDATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
