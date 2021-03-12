import React, { useState } from "react";
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

function ActionButton(props) {

  const [formOpen, setFormOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  function renderAddButton() {
    const { list } = props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";


    return (
      <div 
        onClick={openForm}
        style={{
          ...styles.buttonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  function openForm() {
    setFormOpen(!formOpen);
  };

  function closeForm(e) {
    setFormOpen(!formOpen);
  };

  function handleInputChange(e) {
    setInputText(e.target.value);
  };

  function handleAddList() {
    const { dispatch } = props;
    const text  = inputText;

    if (text) {
      setInputText("");
      dispatch(addList(text));
    }

    return;
  };

  function handleAddCard() {
    const { dispatch, listID } = props;
    const text = inputText;

    if (text) {
      setInputText("");
      dispatch(addCard(listID, text));
    }

  };

  function renderForm() {

    const { list } = props;

    const placeholder = list ? "Enter list title..." : "Enter a title for this card...";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card style={{
          overflow: "visible",
          minHeight: 80,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}>
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={inputText}
            onChange={handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              overflow: "hidden",
              border: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button 
            onMouseDown={list ? handleAddList : handleAddCard}
            variant="contained" 
            style={{color: "white", backgroundColor: "#5aac44"}}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    )
  };

  

  return formOpen ? renderForm() : renderAddButton();
};




const styles = {
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }

}


export default connect() (ActionButton);