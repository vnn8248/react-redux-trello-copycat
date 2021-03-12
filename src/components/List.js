import React from "react";
import Card from "./Card";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";

function List(props) {
  return (
    <Droppable droppableId={String(props.listID)}>
      {provided => {
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
          <h4>{props.title}</h4>
          {props.cards.map(card => <Card key={card.id} text={card.text} />)}
          <ActionButton listID={props.listID}/>
        </div>
      }};
    </Droppable>
  );
};

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