import { createStore } from "redux";
import sidebarReducer from "./reducers/sidebar.reducer";

const store = createStore(sidebarReducer);

export default store;
