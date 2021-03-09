import React from "react";
import Card from "./Card";
import ActionButton from "./ActionButton";

function List(props) {
  return (
    <div style={styles.container}>
      <h4>{props.title}</h4>
      {props.cards.map(card => <Card key={card.id} text={card.text} />)}
      <ActionButton />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 5,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8
  }
}

export default List;