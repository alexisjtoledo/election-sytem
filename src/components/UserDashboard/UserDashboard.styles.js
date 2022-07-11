import Styled from "styled-components";
import { getColor } from "../../theme/Color";
import { device } from "../../theme/Media";

export const MainContainer = Styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    border-radius: 0px;
    background-color: ${getColor("lightgrey")};
    padding-top: 64px;

    @media ${device.tablet} {
        overflow-y: scroll;
        padding-top: 0px;
    }
`;

export const SectionTitle = Styled.h2`
    align-self: center;
    font-size: 2.5em;
    margin-bottom: 32px;
`;
