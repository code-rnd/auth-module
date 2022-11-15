import { configureStore } from "@reduxjs/toolkit";

import { user } from "./slices";

export const store = configureStore({
  reducer: {
    user,
  },
});
