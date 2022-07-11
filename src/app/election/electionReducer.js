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
            console.log("Logged in");
        },
        castVote: (state, action) => {
            console.log("Vote issued");
        },
    },
});

export const { setLogin, castVote } = electionSlice.actions;

export default electionSlice.reducer;
