import { CITY } from "../Action/action";
const cityReducer = ( state = '', action) => {
    switch (action.type) {
      case CITY :
        return action.payload;
      default :
        return state; 
    }
};
export default cityReducer;
