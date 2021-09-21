import updateCart from "./updateCart";
import login from "./login";
import signup from "./signup";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    updateCart,
    login,
    signup
});

export default rootReducer;