import React from "react";

/* COMPONENTS */
import MultipleChoiceIcon from "../../assets/icons/multiple.svg";
import SingleChoiceIcon from "../../assets/icons/single.svg";
import WriteInIcon from "../../assets/icons/write-in.svg";

/* STYLES */
import * as Styled from "./BallotThumbnail.styles";

const BallotThumbnail = ({ data, toggleVotingScreen }) => {
    /* PROPS DESTRUCTURING */
    const { name, type, options, id } = data;

    return (
        <Styled.ListItem>
            <Styled.ListItemTitle>{name}</Styled.ListItemTitle>
            <Styled.ListItemTypeGroup>
                <Styled.ListItemTypeImage
                    src={
                        data.type === "multiple-choice"
                            ? MultipleChoiceIcon
                            : data.type === "single-choice"
                            ? SingleChoiceIcon
                            : WriteInIcon
                    }
                />
                <Styled.ListItemDescription>
                    {data.type === "multiple-choice"
                        ? "Multiple choice"
                        : data.type === "single-choice"
                        ? "Single choice"
                        : "Write In"}
                </Styled.ListItemDescription>
            </Styled.ListItemTypeGroup>
            {type === "write-in" ? null : (
                <Styled.ListItemDescription>
                    {options.length} options
                </Styled.ListItemDescription>
            )}
            <Styled.ListItemButton onClick={() => toggleVotingScreen(id)}>
                Vote
            </Styled.ListItemButton>
        </Styled.ListItem>
    );
};

export default BallotThumbnail;
