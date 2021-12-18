import { GET_CHARACTORS, ADD_FAVRUEST, } from "../actions/types";

const initialState = {
  charData: [],
  fevData: [],

};

const srlReducer = (state = initialState, action) => {
  console.log('action.type', action)
  switch (action.type) {

    case GET_CHARACTORS:
      return {
        ...state,
        charData: action.payload
      }
    case ADD_FAVRUEST:
      return {
        ...state,
        fevData: [...state.fevData, action.payload]
      }


    default:
      return state;
  }
}

export default srlReducer;