import React, { useState } from "react";

/* COMPONENTS */
import PasswordIcon from "../../assets/icons/password.svg";
import HideIcon from "../../assets/icons/hide.svg";
import ShowIcon from "../../assets/icons/show.svg";
import UserIcon from "../../assets/icons/user.svg";

/* STYLES */
import * as Styled from "./LogIn.styles";

/* STATE */
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../app/election/electionReducer";

const LogIn = () => {
    /* APP STATE */
    const users = useSelector((state) => state.election.users);
    const blankBallots = useSelector((state) => state.election.blankBallots);
    const dispatch = useDispatch();

    /* LOCAL STATE */
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        e.target.value
            ? setIsUsernameFocused(true)
            : setIsUsernameFocused(false);
        setUsername(e.target.value);
    };

    const handleUsernameBlur = () => {
        !username && setIsUsernameFocused(false);
    };

    const handlePassword = (e) => {
        e.target.value
            ? setIsPasswordFocused(true)
            : setIsPasswordFocused(false);
        setPassword(e.target.value);
    };

    const handlePasswordBlur = () => {
        !password && setIsPasswordFocused(false);
    };

    const handleLoginButton = (e) => {
        e.preventDefault();
        const currentUser = users.find((user) => user.username === username);

        if (currentUser) {
            const newLogin = {
                isUserLogged: true,
                userId: currentUser.username,
                userBallots:
                    currentUser.ballots.length !== 0
                        ? currentUser.ballots
                        : blankBallots,
            };
            currentUser.password === password && dispatch(setLogin(newLogin));
        }
    };

    return (
        <Styled.LoginContainer>
            <Styled.LoginTitle>Log In</Styled.LoginTitle>

            <Styled.FormContainer>
                <Styled.InputGroup>
                    <Styled.InputIcon src={UserIcon} />
                    <Styled.InputLabel
                        htmlFor="id"
                        isFocused={isUsernameFocused}
                    >
                        Identification
                    </Styled.InputLabel>
                    <Styled.InputField
                        id="id"
                        value={username}
                        onChange={handleUsername}
                        onFocus={() => setIsUsernameFocused(true)}
                        onBlur={handleUsernameBlur}
                    />
                </Styled.InputGroup>

                <Styled.InputGroup>
                    <Styled.InputIcon src={PasswordIcon} />
                    <Styled.InputLabel
                        htmlFor="password"
                        isFocused={isPasswordFocused}
                    >
                        Password
                    </Styled.InputLabel>
                    <Styled.InputField
                        type={isPasswordHidden ? "password" : "text"}
                        id="password"
                        value={password}
                        onChange={handlePassword}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={handlePasswordBlur}
                    />
                    <Styled.InputIcon
                        right
                        src={isPasswordHidden ? ShowIcon : HideIcon}
                        onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                    />
                </Styled.InputGroup>

                <Styled.Button onClick={handleLoginButton}>
                    Log In
                </Styled.Button>
            </Styled.FormContainer>
        </Styled.LoginContainer>
    );
};

export default LogIn;
