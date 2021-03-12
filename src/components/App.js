import React from "react";
import List from "./List";
import ActionButton from "./ActionButton";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

function App(props) {

  function onDragEnd() {
    // TODO: reordering logic
  };

  const { lists } = props;
  console.log(lists)

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={styles.app}>
        <h2>Hello Trello</h2>
        <div style={styles.listContainer}> 
          {lists.map(list => <List listID={list.id} key={list.id} title={list.title} cards={list.cards} />)}
          <ActionButton list />
        </div>
      </div>
    </DragDropContext>
  );
};

const styles = {
  app: {
    fontFamily: "roboto"
  },
  listContainer: {
    display: "flex"
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);
