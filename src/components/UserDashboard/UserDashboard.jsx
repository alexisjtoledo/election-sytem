import React from "react";

/* COMPONENTS */
import UserPanel from "../UserPanel/UserPanel";

/* STYLES */
import * as Styled from "./UserDashboard.styles";

/* STATE */
import { useSelector } from "react-redux";

const UserDashboard = () => {
    /* APP STATE */
    const { electionName } = useSelector((state) => state.election);

    return (
        <Styled.MainContainer>
            <UserPanel />
            <Styled.SectionTitle>{electionName}</Styled.SectionTitle>
        </Styled.MainContainer>
    );
};

export default UserDashboard;
