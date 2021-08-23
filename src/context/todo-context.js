import React, { useContext, useEffect, useReducer } from "react";
import {
  RESET_ERROR,
  SET_ERROR,
  SET_ITEM,
  ADD_TO_LIST,
  DELETE_ITEM,
  EDIT_ITEM,
  TOGGLE_COMPLETION,
  SET_FILTER,
  FILTER_LIST,
} from "../utils";
import reducer from "../reducer/todo-reducer";

const toDoContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("todo-list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [
      {
        id: 1,
        item: "TODO-1",
        completed: false,
      },
      {
        id: 2,
        item: "TODO-2",
        completed: false,
      },
    ];
  }
};

const initialState = {
  list: getLocalStorage(),
  item: "",
  error: false,
  editItemId: "",
  filterCriteria: "All",
  filteredList: [],
};

const ToDoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(state.list));
  }, [state.list]);

  useEffect(() => {
    dispatch({ type: FILTER_LIST });
  }, [state.filterCriteria, state.list]);

  const setItem = (item) => {
    dispatch({ type: SET_ITEM, payload: item });
  };

  const addItemHandler = (item) => {
    dispatch({ type: ADD_TO_LIST, payload: item });
  };

  const deleteItemHandler = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  const editItemHandler = (id) => {
    dispatch({ type: EDIT_ITEM, payload: id });
  };

  const toggleCompletion = (id) => {
    dispatch({ type: TOGGLE_COMPLETION, payload: id });
  };

  const setError = () => {
    dispatch({ type: SET_ERROR });
  };

  const resetError = () => {
    dispatch({ type: RESET_ERROR });
  };

  const setFilter = (filter) => {
    dispatch({ type: SET_FILTER, payload: filter });
  };

  return (
    <toDoContext.Provider
      value={{
        ...state,
        setItem,
        addItemHandler,
        setError,
        resetError,
        deleteItemHandler,
        editItemHandler,
        toggleCompletion,
        setFilter,
      }}
    >
      {children}
    </toDoContext.Provider>
  );
};

export const useToDoContextProvider = () => {
  return useContext(toDoContext);
};

export default ToDoContextProvider;
