import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Notes extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>To do list</h1>
          <p>I have {this.props.storedNotes.length} tasks</p>
        </header>
        <form>
          <input type="text" id="addNote"></input>
          <button type="button" onClick={this.props.add}>
            Add a task
          </button>
        </form>
        <div className="list">
          {this.props.storedNotes.map((item) => (
            <li key={item.id}>{item.content}<button onClick={() => this.props.remove(item.id)}>Delete</button></li>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storedNotes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () =>
      dispatch({
        type: actionTypes.ADD,
      }),
      remove: (id) => dispatch({ type: actionTypes.REMOVE, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);