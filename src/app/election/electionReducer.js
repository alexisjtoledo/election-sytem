import { createSlice, current } from "@reduxjs/toolkit";
import election from "../../data/election.json";

/**
 *  Checks if there's any persisted data in the browser
 *  and selects a blank state if there aren't any.
 */
export const loadState = () => {
    const preservedState = localStorage.getItem("state");
    if (preservedState) {
        return JSON.parse(preservedState);
    } else {
        return {
            electionName: election.name,
            blankBallots: election.ballots,
            users: election.users,
            login: {
                isUserLogged: false,
                userId: null,
                userBallots: [],
            },
            results: {
                totalVotes: 0,
                castedVotes: [],
            },
        };
    }
};

const currentState = loadState();

export const electionSlice = createSlice({
    name: "election",

    initialState: currentState,

    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
            localStorage.setItem("state", JSON.stringify(current(state)));
        },
        castVote: (state, action) => {
            state.login.userBallots = state.login.userBallots.map((ballot) =>
                ballot.id === action.payload.id ? action.payload : ballot,
            );
            state.results.castedVotes = [
                ...state.results.castedVotes,
                action.payload,
            ];
            state.results.totalVotes += 1;
            state.users = state.users.map((user) =>
                user.username === action.payload.identity
                    ? { ...user, ballots: state.login.userBallots }
                    : user,
            );
            localStorage.setItem("state", JSON.stringify(current(state)));
        },
    },
});

export const { setLogin, castVote } = electionSlice.actions;

export default electionSlice.reducer;
