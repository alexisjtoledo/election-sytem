import { createGlobalStyle } from "styled-components";
import { getColor } from "./Color";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    *, *:before, *:after {
        *, *::before, *::after {
            box-sizing: border-box;
        }
    }

    html, body {
        height: 100%;
        font-family: niveau-grotesk, sans-serif;
        font-weight: 400;
        font-style: normal;
        background-color: ${getColor("primary")};
        color: ${getColor("primary")};
    }

    input, button, textarea, select {
        font: inherit;
    }
    
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
`;
