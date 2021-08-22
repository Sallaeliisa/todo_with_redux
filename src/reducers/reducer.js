import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        notes: state.notes.concat({
          id: new Date(),
          content: document.getElementById("addNote").value,
        }),
      };
      case actionTypes.REMOVE:
        const updatedArray = state.notes.filter(
          (item) => item.id !== action.item
        );
        return {
          ...state,
          notes: updatedArray,
        };
  }
  return state;
};

const initialState = {
  notes: [],
};

export default reducer;
