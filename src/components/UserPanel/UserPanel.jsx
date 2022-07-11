import React from "react";

/* STYLES */
import * as Styled from "./UserPanel.styles";

/* STATE */
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../app/election/electionReducer";

const UserPanel = () => {
    /* APP STATE */
    const dispatch = useDispatch();
    const name = useSelector((state) => state.election.login.userId);

    const handleLogOut = () => {
        const newLogout = {
            isUserLoggedIn: false,
            isUserAdmin: false,
            userId: null,
        };
        dispatch(setLogin(newLogout));
    };

    return (
        <Styled.UserContainer>
            <Styled.UserNameText>{`Welcome ${name}!`}</Styled.UserNameText>
            <Styled.UserLogoutButton onClick={handleLogOut}>
                Log out
            </Styled.UserLogoutButton>
        </Styled.UserContainer>
    );
};

export default UserPanel;
