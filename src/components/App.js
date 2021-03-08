import React from "react";
import List from "./List";
import { connect } from "react-redux";

function App(props) {

  const { lists } = props;
  console.log(lists)

  return (
    <div>
      <h2>Hello Trello</h2>
      <div style={styles.listContainer}> 
        {lists.map(list => <List key={list.id} title={list.title} cards={list.cards} />)}
      </div>
    </div>
  );
};

const styles = {
  listContainer: {
    display: "flex"
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);
