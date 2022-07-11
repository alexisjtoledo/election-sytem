import { createSlice } from "@reduxjs/toolkit";
import election from "../../data/election.json";

export const electionSlice = createSlice({
    name: "election",

    initialState: {
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
    },

    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
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
        },
    },
});

export const { setLogin, castVote } = electionSlice.actions;

export default electionSlice.reducer;
