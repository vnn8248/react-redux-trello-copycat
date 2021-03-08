import React, { useState } from "react";
import Icon from '@material-ui/core/Icon';
import Card from "./Card";
import TextareaAutosize from 'react-textarea-autosize';

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
  }

  function closeForm(e) {
    setFormOpen(!formOpen);
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function renderForm() {

    const { list } = props;

    const placeholder = list ? "Enter list title..." : "Enter a title for this card...";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>

          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}

            onChange={handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              overflow: "hidden",
              border: "none"
            }}
          />

      </div>
    )
  }

  

  return formOpen ? renderForm() : renderAddButton();
}




const styles = {
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  }
}


export default ActionButton;