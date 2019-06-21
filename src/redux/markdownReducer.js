import { MD_HANDLE_CHANGE } from "./markdownActions";

const initialState = {
  markdownText: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MD_HANDLE_CHANGE:
      return {
        ...state,
        markdownText: action.payload
      };
    default:
      return state;
  }
};
