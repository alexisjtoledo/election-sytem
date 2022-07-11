import { configureStore } from "@reduxjs/toolkit";
import electionReducer from "./election/electionReducer";

export const store = configureStore({
    reducer: {
        election: electionReducer,
    },
});
