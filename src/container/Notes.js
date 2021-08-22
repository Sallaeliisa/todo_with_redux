import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class Notes extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" id="addNote"></input>
          <button type='button' onClick={this.props.add}>Add a task</button>
        </form>
        <div className="list">
          {this.props.storedNotes.map((item) => (
            <li key={item.id}>{item.content}</li>
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
        type: actionTypes.ADD
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
