import React from "react";

/* COMPONENTS */
import MultipleChoiceIcon from "../../assets/icons/multiple.svg";
import SingleChoiceIcon from "../../assets/icons/single.svg";
import WriteInIcon from "../../assets/icons/write-in.svg";
import Seal from "../../assets/icons/seal.svg";

/* STYLES */
import * as Styled from "./BallotThumbnail.styles";

const BallotThumbnail = ({ data, toggleVotingScreen }) => {
    /* PROPS DESTRUCTURING */
    const { name, type, options, id, voted } = data;

    return (
        <Styled.ListItem voted={voted}>
            {voted && <Styled.VotedSeal src={Seal} />}
            <Styled.ListItemTitle voted={voted}>{name}</Styled.ListItemTitle>
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
                {voted ? "Change" : "Vote"}
            </Styled.ListItemButton>
        </Styled.ListItem>
    );
};

export default BallotThumbnail;
