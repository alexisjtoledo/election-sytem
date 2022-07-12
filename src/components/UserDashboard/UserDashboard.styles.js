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

export const Dashboard = Styled.div`
    border-radius: 16px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const ListGroup = Styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${getColor("white")};
    width: 75vw;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 0 16px rgba(0,0,0,0.1);
    margin-bottom: 32px;

    @media ${device.tablet} {
        width: 30vw;
        min-height: 70vh;
        max-height: 80vh;
        margin-bottom: 0px;
    }
`;

export const List = Styled.ul`
    padding: 16px;
`;

export const ListTitle = Styled.h3`
    font-size: 2em;
    align-self: center;
    margin-bottom: 16px;
`;
