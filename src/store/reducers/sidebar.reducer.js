import { TOGGLE_SIDEBAR } from "../constants/actions";

const sidebarState = {
  open: false,
};

const sidebarReducer = (state = sidebarState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return sidebarState;
  }
};

export default sidebarReducer;
