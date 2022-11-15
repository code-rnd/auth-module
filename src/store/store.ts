import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducer";
import { StoreModel } from "./store.model";

export const store = configureStore<StoreModel>({
  reducer: rootReducer,
});
