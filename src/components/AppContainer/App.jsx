/* COMPONENTS */
import LogIn from "../Login/Login";
import UserDashboard from "../UserDashboard/UserDashboard";

/* STYLES */
import GlobalStyle from "../../theme/GlobalStyles";
import * as Styled from "./App.styles";

/* STATE */
import { useSelector } from "react-redux";

function App() {
    /* APP STATE */
    const isUserLogged = useSelector(
        (state) => state.election.login.isUserLogged,
    );

    return (
        <Styled.Container>
            <GlobalStyle />
            {isUserLogged ? <UserDashboard /> : <LogIn />}
        </Styled.Container>
    );
}

export default App;
