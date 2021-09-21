import rootReducer from "./reducers/index";
import { createStore } from "redux";

const myStore = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default myStore;
