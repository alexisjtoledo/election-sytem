import React from "react";

/* COMPONENTS */
import UserPanel from "../UserPanel/UserPanel";
import BallotThumbnail from "../BallotThumbnail/BallotThumbnail";

/* STYLES */
import * as Styled from "./UserDashboard.styles";

/* STATE */
import { useSelector } from "react-redux";

const UserDashboard = () => {
    /* APP STATE */
    const { electionName, login } = useSelector((state) => state.election);

    return (
        <Styled.MainContainer>
            <UserPanel />
            <Styled.SectionTitle>{electionName}</Styled.SectionTitle>
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
                                    />
                                ),
                        )}
                    </Styled.List>
                </Styled.ListGroup>
            </Styled.Dashboard>
        </Styled.MainContainer>
    );
};

export default UserDashboard;
