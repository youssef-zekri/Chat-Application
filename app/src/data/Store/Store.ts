import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../Reducers/Reducers";
export default configureStore({
  reducer: {
    GlobalStore: Reducer,
  },
});
