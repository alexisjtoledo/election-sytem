import Styled from "styled-components";
import { getColor } from "../../theme/Color";
import { device } from "../../theme/Media";

export const BallotContainer = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    border: dotted 8px ${getColor("primary")};
    margin: 0 24px;

    @media ${device.tablet} {
        margin: 0 80px;
    }
`;

export const BallotIdContainer = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
`;

export const BallotIdText = Styled.p`
    color: ${getColor("darkgrey")};
`;

export const BallotTitle = Styled.h3`
    font-size: 1.8em;
    margin-bottom: 16px;
`;

export const BallotDescription = Styled.p`
    font-size: 1.2em;
    margin-bottom: 16px;
`;

export const BallotList = Styled.ul`
    display: flex;
    flex-direction: column;
`;

export const ButtonContainer = Styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column-reverse;

    
    @media ${device.tablet} {
        margin-top: 80px;
        flex-direction: row;
    }
`;

export const BallotPrimaryButton = Styled.button`
    align-self: flex-end;
    width: 180px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: ${getColor("secondary")};
    color: ${getColor("white")};
    transition: all 200ms ease-out;

    &:hover {
        background-color: ${getColor("primary")};
    }
`;

export const BallotSecondaryButton = Styled.button`
    align-self: flex-end;
    width: 180px;
    height: 32px;
    border-radius: 8px;
    margin-top: 16px;
    background-color: ${getColor("lightgrey")};
    color: ${getColor("secondary")};
    border: 2px solid transparent;
    transition: all 200ms ease-in-out;

    &:hover {
        border: 2px solid ${getColor("accent")};
        color: ${getColor("accent")};
    }

    @media ${device.tablet} {
        margin-right: 16px;
    }
`;

export const OptionContainer = Styled.div`
    min-width: 200px;
    max-width: 80vw;
    height: 48px;
    margin: 16px 0;
    position: relative;

    @media ${device.tablet} {
        min-width: 300px;
        max-width: 70vw;
    }
`;

export const OptionLabel = Styled.label`
    position: absolute;
    font-size: 1.5em;
    top: 12px;
    left: 56px;
    cursor: pointer;
`;

export const OptionCheckbox = Styled.input`
    position: absolute;
    width: 32px;
    height: 32px;
    top: 8px;
    left: 8px;
    cursor: pointer;
`;

export const ConfirmationSummaryList = Styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
`;

export const ConfirmationSummaryItem = Styled.li`
    font-size: 1.8em;
    margin-bottom: 16px;
`;

export const WriteInContainer = Styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    margin-top: 16px;
`;

export const WriteInLabel = Styled.label`
    margin-left: 8px;
    margin-bottom: 4px;
`;

export const WriteInInput = Styled.input`
    width: 250px;
    height: 32px;
    border-radius: 8px;
    border: none;
    padding: 0 8px;
    
    @media ${device.tablet} {
        width: 320px;
    }
`;

export const WriteInbuttonImg = Styled.img`
    width: 24px;
    height: 24px;
`;

export const WriteInAddButon = Styled.button`
    margin-top: -31px;
    margin-left: 235px;
    width: 32px;
    height: 32px;
    background: none;
    border: none;

    @media ${device.tablet} {
        margin-left: 304px;
    }
`;
