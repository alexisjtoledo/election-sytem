import Styled from "styled-components";
import { getColor } from "../../theme/Color";
import { device } from "../../theme/Media";

export const LoginContainer = Styled.section`
    width: 330px;
    height: auto;
    background-color: ${getColor("lightgrey")};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 0;

    @media ${device.tablet} {
        width: 400px;
    }
`;

export const LoginTitle = Styled.h3`
    margin-bottom: 24px;
`;

export const FormContainer = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const InputGroup = Styled.div`
    position: relative;
    margin-bottom: 64px;
`;

export const InputIcon = Styled.img`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 16px;
    height: 16px;
    z-index: 10;
    fill: ${getColor("primary")};

    ${(props) => {
        if (props.right) {
            return `
                left: 224px;
            `;
        }
    }};

    @media ${device.tablet} {
        ${(props) => {
            if (props.right) {
                return `
                left: 324px;
            `;
            }
        }};
    }
`;

export const InputLabel = Styled.label`
    position: absolute;
    transition: all 200ms ease-out;
    z-index: 10;

    ${(props) => {
        if (props.isFocused) {
            return `
                top: -16px;
                left: 8px;
                font-size: 0.75em;
            `;
        } else {
            return `
                top: 8px;
                left: 32px;
            `;
        }
    }};

`;

export const InputField = Styled.input`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 220px;
    height: 32px;
    border-radius: 8px;
    border: none;
    padding: 0 0 0 32px;

    @media ${device.tablet} {
        width: 320px;
    }
`;

export const Button = Styled.button`
    width: 252px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: ${getColor("secondary")};
    color: ${getColor("lightgrey")};
    transition: all 200ms ease-out;

    &:hover  {
        background-color: ${getColor("primary")};
    }

    @media ${device.tablet} {
        width: 352px;
    }
`;
