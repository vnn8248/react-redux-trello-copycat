import React from "react";
import List from "./List";
import ActionButton from "./ActionButton";
import { connect } from "react-redux";

function App(props) {

  const { lists } = props;
  console.log(lists)

  return (
    <div style={styles.app}>
      <h2>Hello Trello</h2>
      <div style={styles.listContainer}> 
        {lists.map(list => <List key={list.id} title={list.title} cards={list.cards} />)}
        <ActionButton list />
      </div>
    </div>
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
