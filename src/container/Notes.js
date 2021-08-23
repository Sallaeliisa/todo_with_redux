import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Notes extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>To do list</h1>
          <p>Tasks: {this.props.storedNotes.length}</p>
        </header>
        <form>
          <input type="text" id="addNote"></input>
          <button
            type="button"
            onClick={() => {
              this.props.add();
              clear();
            }}
          >
            Add a task
          </button>
        </form>
        <div className="list">
          {this.props.storedNotes.map((item) => (
            <li
              key={item.id}
              className={item.completed ? "complete" : "incomplete"}
            >
              <label onClick={() => this.props.check(item.id)}>
                {item.content}
              </label>
              <button
                className="remove-btn"
                onClick={() => this.props.remove(item.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </div>
        <button id='deleteAll' onClick={this.props.deleteAll}>Delete all tasks</button>
      </div>
    );
  }
}

const clear = () => {
  document.getElementById("addNote").value = "";
};

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
    check: (id) => dispatch({ type: actionTypes.CHECK, item: id }),
    deleteAll: () => dispatch({ type: actionTypes.DELETEALL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
