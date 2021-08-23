import {
  SET_ITEM,
  SET_ERROR,
  RESET_ERROR,
  ADD_TO_LIST,
  DELETE_ITEM,
  EDIT_ITEM,
  TOGGLE_COMPLETION,
  SET_FILTER,
  FILTER_LIST,
} from "../utils";
import { nanoid } from "nanoid";
const ToDoReducer = (state, action) => {
  if (action.type === SET_ITEM) {
    return { ...state, item: action.payload };
  }
  if (action.type === SET_ERROR) {
    return { ...state, error: true };
  }
  if (action.type === RESET_ERROR) {
    return { ...state, error: false };
  }

  if (action.type === ADD_TO_LIST) {
    if (state.editItemId) {
      const newList = state.list.map((items) => {
        if (items.id === state.editItemId) {
          return { ...items, item: state.item };
        } else {
          return items;
        }
      });

      return { ...state, list: newList, editItemId: "" };
    } else {
      const id = nanoid();
      const newList = [
        ...state.list,
        { id, item: action.payload, completed: false },
      ];
      return { ...state, list: newList };
    }
  }
  if (action.type === DELETE_ITEM) {
    const newList = state.list.filter((item) => item.id !== action.payload);
    return { ...state, list: newList };
  }

  if (action.type === EDIT_ITEM) {
    return { ...state, editItemId: action.payload };
  }

  if (action.type === TOGGLE_COMPLETION) {
    const newList = state.list.map((items) => {
      if (items.id === action.payload) {
        return { ...items, completed: !items.completed };
      } else {
        return items;
      }
    });

    return { ...state, list: newList };
  }

  if (action.type === SET_FILTER) {
    return { ...state, filterCriteria: action.payload };
  }

  if (action.type === FILTER_LIST) {
    let filtered = [];
    if (state.filterCriteria === "All") {
      filtered = state.list.filter((item) => item);
    }
    if (state.filterCriteria === "completed") {
      filtered = state.list.filter((item) => item.completed === true);
    }
    if (state.filterCriteria === "incomplete") {
      filtered = state.list.filter((item) => item.completed === false);
    }
    return { ...state, filteredList: filtered };
  }
  return <></>;
};

export default ToDoReducer;
