import React, { useState } from "react";

/* COMPONENTS */
import Add from "../../assets/icons/add.svg";

/* STYLES */
import * as Styled from "./BallotScreen.styles";

/* STATE */
import { useDispatch } from "react-redux";
import { castVote } from "../../app/election/electionReducer";

const BallotScreen = ({ data, toggleVotingScreen, user }) => {
    /* APP STATE */
    const dispatch = useDispatch();
    const { name, type, options, id } = data;

    /* LOCAL STATE */
    const [confirmationScreen, setConfirmationScreen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(options);
    const [inputText, setInputText] = useState("");

    const handleConfirmation = () => {
        setConfirmationScreen(true);
    };

    const handleBackToOptions = () => {
        setConfirmationScreen(false);
    };

    /**
     * Receives the IDs of the selected options
     * and sets them in the state.
     * @param {Number} checkid
     */
    const handleSelection = (checkid) => {
        let newValues = selectedOptions.map((value) =>
            value.id === checkid
                ? {
                      ...value,
                      selected: !value.selected,
                  }
                : value,
        );
        setSelectedOptions(newValues);
    };

    /**
     * Receives the IDs of the selected option,
     * resets the remaining options and then sets
     * it in the state.
     * @param {Number} checkid
     */
    const handleSingleSelection = (checkid) => {
        let newSingleValue = selectedOptions.map((value) =>
            value.id === checkid
                ? {
                      ...value,
                      selected: true,
                  }
                : {
                      ...value,
                      selected: false,
                  },
        );
        setSelectedOptions(newSingleValue);
    };

    /**
     * For WRITE-IN ballots:
     * Gets the new option and set it on the state.
     * TO-DO: Validation response when the inpud field is empty.
     * @param {Event} e
     */
    const handleInputSubmit = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            const newOption = {
                id: selectedOptions.length + 1,
                name: inputText,
                selected: true,
            };
            setSelectedOptions([...selectedOptions, newOption]);
            setInputText("");
        }
    };

    /**
     *  Creates a new ballot with the user's results
     *  and send it to the stat.
     */
    const handleIssueVote = () => {
        const newUserVote = {
            id: id,
            name: name,
            type: type,
            options: selectedOptions,
            voted: true,
            identity: user,
        };
        dispatch(castVote(newUserVote));
        setConfirmationScreen(false);
        toggleVotingScreen();
    };

    return (
        <Styled.BallotContainer>
            <Styled.BallotIdContainer>
                <Styled.BallotIdText>
                    <i>Ballot ID: #{id}</i>
                </Styled.BallotIdText>
                <Styled.BallotIdText>
                    You are voting as <b>{user}</b>
                </Styled.BallotIdText>
            </Styled.BallotIdContainer>
            <Styled.BallotTitle>
                {confirmationScreen
                    ? `You are voting for the following options in the "${name}" poll.`
                    : name}
            </Styled.BallotTitle>
            {!confirmationScreen ? (
                <>
                    <Styled.BallotDescription>
                        {type === "multiple-choice"
                            ? "This is a Multiple Choice poll. Please select one or more options."
                            : type === "single-choice"
                            ? "This is a Single Choice poll. Please select only one option."
                            : "This is a write-in ballot. Please fill in the fields with your options."}
                    </Styled.BallotDescription>
                    <Styled.BallotList>
                        {type === "write-in" && (
                            <Styled.WriteInContainer>
                                <Styled.WriteInLabel>
                                    Write an option and press enter
                                </Styled.WriteInLabel>
                                <Styled.WriteInInput
                                    type="text"
                                    value={inputText}
                                    onChange={(e) =>
                                        setInputText(e.target.value)
                                    }
                                />
                                <Styled.WriteInAddButon
                                    onClick={handleInputSubmit}
                                    type="submit"
                                >
                                    <Styled.WriteInbuttonImg src={Add} />
                                </Styled.WriteInAddButon>
                            </Styled.WriteInContainer>
                        )}
                        {selectedOptions?.map((option) => (
                            <Styled.OptionContainer key={option.id}>
                                <Styled.OptionCheckbox
                                    id={`option${option.id}`}
                                    type="checkbox"
                                    checked={option.selected}
                                    value={option.selected}
                                    onChange={
                                        type !== "single-choice"
                                            ? () => handleSelection(option.id)
                                            : () =>
                                                  handleSingleSelection(
                                                      option.id,
                                                  )
                                    }
                                />
                                <Styled.OptionLabel
                                    htmlFor={`option${option.id}`}
                                >
                                    {option.name}
                                </Styled.OptionLabel>
                            </Styled.OptionContainer>
                        ))}
                    </Styled.BallotList>
                </>
            ) : (
                <Styled.ConfirmationSummaryList>
                    {selectedOptions.map(
                        (option) =>
                            option.selected && (
                                <Styled.ConfirmationSummaryItem key={option.id}>
                                    {option.name}
                                </Styled.ConfirmationSummaryItem>
                            ),
                    )}
                </Styled.ConfirmationSummaryList>
            )}

            <Styled.ButtonContainer>
                <Styled.BallotSecondaryButton
                    onClick={() => {
                        !confirmationScreen
                            ? toggleVotingScreen(null)
                            : handleBackToOptions();
                    }}
                >
                    {confirmationScreen ? "Change vote" : "Cancel"}
                </Styled.BallotSecondaryButton>
                <Styled.BallotPrimaryButton
                    onClick={() => {
                        !confirmationScreen
                            ? handleConfirmation()
                            : handleIssueVote();
                    }}
                >
                    {confirmationScreen ? "Confirm vote" : "Vote"}
                </Styled.BallotPrimaryButton>
            </Styled.ButtonContainer>
        </Styled.BallotContainer>
    );
};

export default BallotScreen;
