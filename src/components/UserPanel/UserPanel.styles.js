import Styled from "styled-components";
import { getColor } from "../../theme/Color";
import { device } from "../../theme/Media";

export const UserContainer = Styled.div`
    display: flex;
    align-items: center;
    margin: 32px 32px;
    align-self: center;

    @media ${device.tablet} {
        align-self: flex-end;
    }
`;

export const UserNameText = Styled.p`
    color: ${getColor("primary")};
    margin: 0 16px;
    font-size: 1.2em;
`;

export const UserLogoutButton = Styled.button`
    width: 80px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: ${getColor("secondary")};
    color: ${getColor("lightgrey")};
    transition: all 200ms ease-out;

    &:hover {
        background-color: ${getColor("primary")};
    }
`;
