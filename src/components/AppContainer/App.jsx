import React from "react";

/* STYLES */
import GlobalStyle from "../../theme/GlobalStyles";
import * as Styled from "./App.styles";

function App() {
    return (
        <Styled.Container>
            <GlobalStyle />
            <div>App</div>
        </Styled.Container>
    );
}

export default App;
