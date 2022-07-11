import Styled from "styled-components";
import { getColor } from "../../theme/Color";

export const ListItem = Styled.li`
    display: flex;
    flex-direction: column;
    border: solid 4px ${getColor("darkgrey")};
    border-right: dashed 4px ${getColor("darkgrey")};
    border-radius: 8px 0 0 8px;
    padding: 16px;
    list-style-type: none;
    margin: 0 0 16px 0;
    box-shadow: 0 0 0 ${getColor("black")};
    box-shadow: 0px 0px 12px transparent;
    transition: all 300ms ease-out;
    overflow: hidden;

    ${(props) => {
        if (props.voted) {
            return `
                border: solid 4px ${getColor("primary")};
                border-radius: 8px;
            `;
        } else {
            return `
                border: solid 4px ${getColor("darkgrey")};
                border-right: dashed 4px ${getColor("darkgrey")};
                border-radius: 8px 0 0 8px;
            `;
        }
    }};

    &:hover {
        transform: scale(1.1);
        transform: rotate(-1deg);
        box-shadow: 0px 0px 12px ${getColor("lightgrey")};
    };

    &:hover h4 {
        color: ${getColor("accent")};
    }
`;

export const ListItemTitle = Styled.h4`
    font-size: 1.2em;
    margin-bottom: 8px;

    ${(props) => {
        if (props.voted) {
            return `
                margin-top: -40px;
            `;
        } else {
            return `
                margin-top: 0px;
            `;
        }
    }};
`;

export const ListItemTypeGroup = Styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 4px;
`;

export const ListItemTypeImage = Styled.img`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;

export const ListItemDescription = Styled.p``;

export const ListItemButton = Styled.button`
    align-self: flex-end;
    width: 80px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: ${getColor("primary")};
    color: ${getColor("white")};
    transition: all 200ms ease-out;

    &:hover {
        background-color: ${getColor("accent")};
    }
`;

export const VotedSeal = Styled.img`
    align-self: flex-end;
    z-index: 10;
    margin-top: -32px;
    margin-right: -32px;
    height: 80px;
    width: 80px;
    opacity: 0.7;
`;
