import React, { useState } from "react";

/* COMPONENTS */
import UserPanel from "../UserPanel/UserPanel";
import BallotThumbnail from "../BallotThumbnail/BallotThumbnail";
import BallotScreen from "../BallotScreen/BallotScreen";

/* STYLES */
import * as Styled from "./UserDashboard.styles";

/* STATE */
import { useSelector } from "react-redux";

const UserDashboard = () => {
    /* APP STATE */
    const { electionName, login } = useSelector((state) => state.election);

    /* LOCAL STATE */
    const [openBallot, setOpenBallot] = useState(null);
    const [openBallotData, setOpenBallotData] = useState({});

    const toggleVotingScreen = (id) => {
        setOpenBallot(id);
        if (id) {
            const newVote = login.userBallots.find(
                (ballot) => ballot.id === id,
            );
            setOpenBallotData(newVote);
        }
    };

    return (
        <Styled.MainContainer>
            <UserPanel />
            <Styled.SectionTitle>{electionName}</Styled.SectionTitle>

            {openBallot ? (
                <BallotScreen
                    toggleVotingScreen={toggleVotingScreen}
                    data={openBallotData}
                    user={login.userId}
                />
            ) : (
                <Styled.Dashboard>
                    <Styled.ListGroup>
                        <Styled.ListTitle>Available ballots</Styled.ListTitle>
                        <Styled.List>
                            {login.userBallots.map(
                                (ballot) =>
                                    !ballot.voted && (
                                        <BallotThumbnail
                                            key={ballot.id}
                                            data={ballot}
                                            toggleVotingScreen={() =>
                                                toggleVotingScreen(ballot.id)
                                            }
                                        />
                                    ),
                            )}
                        </Styled.List>
                    </Styled.ListGroup>
                    <Styled.ListGroup>
                        <Styled.ListTitle>Casted ballots</Styled.ListTitle>
                        <Styled.List>
                            {login.userBallots.map(
                                (ballot) =>
                                    ballot.voted && (
                                        <BallotThumbnail
                                            key={ballot.id}
                                            data={ballot}
                                            toggleVotingScreen={() =>
                                                toggleVotingScreen(ballot.id)
                                            }
                                        />
                                    ),
                            )}
                        </Styled.List>
                    </Styled.ListGroup>
                </Styled.Dashboard>
            )}
        </Styled.MainContainer>
    );
};

export default UserDashboard;
