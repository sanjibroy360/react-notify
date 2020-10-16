import {
  STORE_PROPS,
  ADD_TOAST_DIRECTIONWISE,
  REMOVE_TOAST_DIRECTIONWISE,
} from "../types";

const initialState = {
  position: "",
  autoClose: "",
  "top-left": [],
  "top-right": [],
  "top-center": [],
  "bottom-left": [],
  "bottom-right": [],
  "bottom-center": [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_PROPS:
      return {
        ...state,
        type: action.payload.type,
        position: action.payload.position,
        autoClose: action.payload.autoClose,
      };

    case ADD_TOAST_DIRECTIONWISE:
      state[action.payload.position] = [
        ...state[action.payload.position],
        action.payload,
      ];
      return { ...state };

    case REMOVE_TOAST_DIRECTIONWISE:
      state[action.payload.position] = state[action.payload.position].filter(
        (toast) => toast.id !== action.payload.id
      );
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
